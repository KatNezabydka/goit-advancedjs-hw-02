import '../css/timer.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

import errorIcon from '../img/error.svg';

import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');

const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let userSelectedDate = null;
let timerInterval = null;

const options = {
  fontFamily: '-apple-system, var(--font-family), sans-serif;',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    validateSelectedDate();
  },
};

flatpickr(datetimePicker, options);
function validateSelectedDate() {
  const now = new Date();
  if (userSelectedDate < now) {
    iziToast.error({
      title: 'Error',
      backgroundColor: '#ef4040',
      iconUrl: errorIcon,
      messageColor: '#fff',
      titleColor: '#fff',
      messageSize: '16px',
      titleSize: '16px',
      position: 'topRight',
      message: 'Please choose a date in the future',
    });
    startButton.disabled = true;
    startButton.classList.add('disabled');
  } else {
    startButton.classList.remove('disabled');
    startButton.disabled = false;
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startButton.addEventListener('click', () => {
  startButton.classList.add('disabled');
  startButton.disabled = true;
  datetimePicker.disabled = true;

  timerInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = userSelectedDate - now;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerFields.days.textContent = '00';
      timerFields.hours.textContent = '00';
      timerFields.minutes.textContent = '00';
      timerFields.seconds.textContent = '00';
      datetimePicker.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
  }, 1000);
});
