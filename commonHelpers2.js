import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form");i.addEventListener("submit",e=>{e.preventDefault();const o=Number(i.elements.delay.value),s=i.elements.state.value;l(o,s).then(t=>{r.success({title:"Success",backgroundColor:"#59a10d",iconUrl:"../img/ok.svg",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",titleSize:"16px",position:"topRight",message:`Fulfilled promise in ${t}ms`})}).catch(t=>{r.error({title:"Error",backgroundColor:"#ef4040",iconUrl:"../img/error.svg",messageColor:"#fff",titleColor:"#fff",messageSize:"16px",titleSize:"16px",position:"topRight",message:`Rejected promise in ${t}ms`})})});function l(e,o){return new Promise((s,t)=>{setTimeout(()=>{o==="fulfilled"?s(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
