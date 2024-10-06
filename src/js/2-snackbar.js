import '../css/snackbar.css';

import errorIcon from '../img/error.svg';
import okIcon from '../img/ok.svg';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then((result) => {
      iziToast.success({
        title: 'Success',
        backgroundColor: '#59a10d',
        iconUrl: okIcon,
        messageColor: '#fff',
        titleColor: '#fff',
        messageSize: '16px',
        titleSize: '16px',
        position: 'topRight',
        message: `Fulfilled promise in ${result}ms`,
      });
    })
    .catch((error) => {
      iziToast.error({
        title: 'Error',
        backgroundColor: '#ef4040',
        iconUrl: errorIcon,
        messageColor: '#fff',
        titleColor: '#fff',
        messageSize: '16px',
        titleSize: '16px',
        position: 'topRight',
        message: `Rejected promise in ${error}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
}
