const S=document.querySelector(".js-design"),s=document.querySelector(".js-collapse"),q=document.querySelector(".js-arrow"),i=document.querySelector(".js-fill"),w=document.querySelector(".js-formFill"),j=document.querySelector(".js-arrow-fill"),k=()=>{s.classList.toggle("hidden"),q.classList.toggle("icon"),s.classList.contains("hidden")&&i.classList.remove("hidden")};S.addEventListener("click",k);const _=()=>{i.classList.toggle("hidden"),j.classList.toggle("icon"),i.classList.contains("hidden")&&s.classList.remove("hidden")};w.addEventListener("click",_);const r=document.getElementById("previsualizacion"),l=r.querySelector(".name"),c=r.querySelector(".surname"),a=r.querySelector(".date"),E=document.getElementsByName("palette");E.forEach(e=>{e.addEventListener("change",function(t){o.field1=parseInt(t.target.value,10),r.classList.remove("color-borde1","color-borde2","color-borde3"),l.classList.remove("color-nombre1","color-nombre2","color-nombre3"),c.classList.remove("color-lugar1","color-lugar2","color-lugar3"),a.classList.remove("color-fecha-hora1","color-fecha-hora2","color-fecha-hora3"),e.checked&&parseInt(e.value,10)===1?(r.classList.add("color-borde1"),l.classList.add("color-nombre1"),c.classList.add("color-lugar1"),a.classList.add("color-fecha-hora1")):e.checked&&parseInt(e.value,10)===2?(r.classList.add("color-borde2"),l.classList.add("color-nombre2"),c.classList.add("color-lugar2"),a.classList.add("color-fecha-hora2")):e.checked&&parseInt(e.value,10)===3&&(r.classList.add("color-borde3"),l.classList.add("color-nombre3"),c.classList.add("color-lugar3"),a.classList.add("color-fecha-hora3"))})});document.querySelector(".js-formName");document.querySelector(".js-formSurname");const d=document.querySelector(".js-date"),u=document.querySelector(".js-fillName"),m=document.querySelector(".js-fillSurname"),g=document.querySelector(".js-fillDate"),I=document.querySelector(".js-fill");function F(e){e.target.id==="firstName"&&(e.target.value.trim()===""?u.innerHTML="Nombre":(u.innerHTML=e.target.value,o.field2=e.target.value)),e.target.id==="surname"&&(e.target.value.trim()===""?m.innerHTML="Lugar":(m.innerHTML=e.target.value,o.field3=e.target.value))}function T(e){e.target.id==="date"&&(e.target.value.trim()===""?g.innerHTML="Fecha y hora":(g.innerHTML=d.value,o.field4=d.value))}d.addEventListener("change",T);I.addEventListener("input",F);const f=document.querySelector(".js-eventPreview"),C=document.querySelector(".js-birthdayEvent"),H=document.querySelector(".js-weddingEvent"),M=document.querySelector(".js-partyEvent");document.querySelector(".js-eventsOptions");function h(e){f.classList.remove("wedding_image_preview","birthday_image_preview","party_image_preview"),f.classList.add(e)}function N(e){console.log("click en wedding"),console.log(e.target.value),o.field5=e.target.value,h("wedding_image_preview")}H.addEventListener("click",N);function B(e){console.log("click en birthday"),console.log(e.target.value),o.field5=e.target.value,h("birthday_image_preview")}C.addEventListener("click",B);function D(e){console.log("click en birthday"),console.log(e.target.value),o.field5=e.target.value,h("party_image_preview")}M.addEventListener("click",D);const n=new FileReader,P=document.querySelector(".js__profile-upload-btn"),L=document.querySelector(".js__profile-image"),y=document.querySelector(".js__profile-preview");function O(e){const t=e.currentTarget.files[0];n.addEventListener("load",$),n.readAsDataURL(t)}function $(){L.style.backgroundImage=`url(${n.result})`,y.style.backgroundImage=`url(${n.result})`,o.photo=n.result.slice(0,100)}P.addEventListener("change",O);const z=document.querySelector(".js-reset");document.querySelector(".preview-container");function p(e){u.innerHTML="Nombre",m.innerHTML="Lugar",g.innerHTML="Fecha y hora",L.style.backgroundImage="none",y.style.backgroundImage="none",r.classList.remove("color-borde1","color-borde2","color-borde3"),l.classList.remove("color-nombre1","color-nombre2","color-nombre3"),c.classList.remove("color-lugar1","color-lugar2","color-lugar3"),a.classList.remove("color-fecha-hora1","color-fecha-hora2","color-fecha-hora3"),f.classList.remove("wedding_image_preview","birthday_image_preview","party_image_preview"),console.log(p)}z.addEventListener("click",p);let o={field1:0,field2:"",field3:"",field4:"",field5:"",photo:""};const R=document.querySelector(".js-create"),v=document.querySelector(".js-showCard");function A(e){fetch("https://dev.adalab.es/api/info/data",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{const b=t.infoID;v.classList.remove("hidden"),v.href=`./cardDetails.html?id=${b}`})}R.addEventListener("click",A);
//# sourceMappingURL=main.js.map
