/*
    -crear formulario y tarjeta visualización
    -seleccionar todos los elementos del HTLM
    -recoger cuando la usuaria escriba la información en cada input
    -pintar en la tarjeta
*/

const nameInput = document.querySelector(".js-formName");
const surnameInput = document.querySelector(".js-formSurname");
const dateInput = document.querySelector(".js-date");
const fillName = document.querySelector(".js-fillName");
const fillSurname = document.querySelector(".js-fillSurname");
const fillDate = document.querySelector(".js-fillDate");
const fillForm = document.querySelector(".js-fill");


function handleForm(event) {
    // if (event.target.id === "firstName") {
    //     fillName.innerHTML = event.target.value;
    // }
    // else if (event.target.id === "surname") {
    //     fillSurname.innerHTML = event.target.value;
    // }
    if (event.target.id === "firstName") {
        if (event.target.value.trim() === "") { // condicional para saber si está vacío o no el input
            fillName.innerHTML = "Nombre"; // Texto predeterminado si está vacío
        } else {
            fillName.innerHTML = event.target.value; // Texto ingresado por la usuaria
            dataForm.field2 = event.target.value;
        }
    }
    if (event.target.id === "surname") {
        if (event.target.value.trim() === "") { // condicional para saber si está vacío o no el input
            fillSurname.innerHTML = "Lugar"; // Texto predeterminado si está vacío
        } else {
            fillSurname.innerHTML = event.target.value; // Texto ingresado por la usuaria
            dataForm.field3 = event.target.value;
        }
    } 
    // console.log(dataForm); 
}

function dateForm(ev) {
    // fillDate.innerHTML = dateInput.value;
    if (ev.target.id === "date") {
        if (ev.target.value.trim() === "") {
            fillDate.innerHTML = "Fecha y hora";
        } else {
            fillDate.innerHTML = dateInput.value;
            dataForm.field4 = dateInput.value;
        }
    } 
}



dateInput.addEventListener("change", dateForm);

fillForm.addEventListener("input", handleForm);

const eventPreview = document.querySelector(".js-eventPreview");
const birthdayInput = document.querySelector(".js-birthdayEvent");
const weddingInput = document.querySelector(".js-weddingEvent");
const partyInput = document.querySelector(".js-partyEvent");
const eventsOptions = document.querySelector(".js-eventsOptions");

function updateEvent(nameClass){
    eventPreview.classList.remove("wedding_image_preview","birthday_image_preview", "party_image_preview");
    eventPreview.classList.add(nameClass);
    

    console.log(dataForm);
}

function handleClickWedding(event){
    console.log("click en wedding");
    console.log(event.target.value); 
    dataForm.field5 = event.target.value;
    updateEvent("wedding_image_preview");
}

weddingInput.addEventListener("click", handleClickWedding);

birthdayInput.addEventListener("click",(event) => 
    updateEvent('birthday_image_preview'));

partyInput.addEventListener("click",(event) => 
    updateEvent('party_image_preview'));

