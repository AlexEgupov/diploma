(()=>{"use strict";(()=>{const e=document.querySelector(".benefits-arrows"),t=document.querySelectorAll(".benefits__item");let o=0;document.body.clientWidth<576&&(t.forEach((e=>{e.classList.remove("benefits__item--active")})),t[0].classList.add("benefits__item--active")),e.addEventListener("click",(e=>{e.preventDefault(),(e.target.matches(".arrow-right")||e.target.matches(".arrow-left"))&&(document.body.clientWidth>576?t.forEach((e=>{e.classList.toggle("benefits__item--active")})):document.body.clientWidth<576&&("benefits__item--active",t[o].classList.remove("benefits__item--active"),e.target.matches(".arrow-right")?o++:e.target.matches(".arrow-left")&&o--,o>=t.length&&(o=0),o<0&&(o=t.length-1),t[o].classList.add("benefits__item--active")))}))})(),(()=>{const e=document.getElementById("services"),t=document.querySelector(".overlay"),o=document.querySelector(".services-modal"),n=document.getElementById("header"),r=document.querySelector(".header-modal"),l=(e,o,n)=>{n.addEventListener("click",(n=>{n.target.matches(e)&&(t.style.display="block",o.style.display="block")}))},a=(e,o)=>{document.querySelector(e).addEventListener("click",(()=>{t.style.display="none",o.style.display="none"}))};l(".btn-header",r,n),a(".header-modal__close",r),l(".btn-sm",o,e),a(".services-modal__close",o)})(),(e=>{const t=document.querySelectorAll(".days"),o=document.querySelectorAll(".hours"),n=document.querySelectorAll(".minutes"),r=document.querySelectorAll(".seconds"),l=document.querySelectorAll(".daysWord"),a=document.querySelectorAll(".hoursWord"),c=document.querySelectorAll(".minutesWord"),s=document.querySelectorAll(".secondsWord");let d;function i(e){return e<10?"0"+e:e}const u=(e,t)=>{const o=(e=Math.abs(e)%100)%10;return e>10&e<20?t[2]:o>1&&o<5?t[1]:1===o?t[0]:t[2]};d=setInterval((()=>{let e=(()=>{let e=(new Date("16 jule 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>0?(t.forEach((t=>t.textContent=i(e.days))),o.forEach((t=>t.textContent=i(e.hours))),n.forEach((t=>t.textContent=i(e.minutes))),r.forEach((t=>t.textContent=i(e.seconds)))):(t.forEach((e=>e.textContent="00")),o.forEach((e=>e.textContent="00")),n.forEach((e=>e.textContent="00")),r.forEach((e=>e.textContent="00")),clearInterval(d)),l.forEach((t=>t.textContent=u(e.days,["День:","Дня:","Дней:"]))),a.forEach((t=>t.textContent=u(e.hours,["Час:","Часа:","Часов:"]))),c.forEach((t=>t.textContent=u(e.minutes,["Минута:","Минуты:","Минут:"]))),s.forEach((t=>t.textContent=u(e.seconds,["Секунда:","Секунды:","Секунд:"])))}),1e3)})(),(()=>{const e=document.querySelectorAll(".form-horizontal");let t=document.querySelectorAll(".nameInput"),o=document.querySelectorAll(".phoneInput");o.forEach((e=>{e.addEventListener("input",(()=>{let t=e.value.replace(/[^0-9\+]/gi,"");t=t.replace(/\++/g,"+"),e.value=t}))})),t.forEach((e=>{e.addEventListener("blur",(e=>{let t=e.target.value.replace(/[^а-яёa-z\s+]/gi,"");t=t.replace(/^\s+|\s+$/g,""),t=t.replace(/\s+/g," "),e.target.value=t,""!=t&&(e.target.value=e.target.value.replace(/( |^)[а-яёa-z]/gi,(e=>e.toUpperCase())))}))}));const n=(e,t,o)=>{e.addEventListener("submit",(n=>{n.preventDefault(),((e,t,o)=>{let n={name:t.value,phone:o.value};""!==t.value&&""!==o.value?((e=>{fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json()))})(n),e.reset()):alert("Нельзя отправить пустую форму!")})(e,t,o)}))};n(e[0],t[0],o[0]),n(e[1],t[1],o[1])})()})();