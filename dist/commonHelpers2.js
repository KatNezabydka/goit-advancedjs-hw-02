import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l=a.elements.email,m=a.elements.message,s="feedback-form-state";function o(){localStorage.setItem(s,JSON.stringify(e))}function r(){const t=localStorage.getItem(s);t&&(e=JSON.parse(t),l.value=e.email||"",m.value=e.message||"")}a.addEventListener("input",t=>{e[t.target.name]=t.target.value,o()});a.addEventListener("submit",t=>{if(t.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e={email:"",message:""},a.reset()});r();
//# sourceMappingURL=commonHelpers2.js.map
