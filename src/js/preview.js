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
        }
    }
    if (event.target.id === "surname") {
        if (event.target.value.trim() === "") { // condicional para saber si está vacío o no el input
            fillSurname.innerHTML = "Lugar"; // Texto predeterminado si está vacío
        } else {
            fillSurname.innerHTML = event.target.value; // Texto ingresado por la usuaria
        }
    }
}

function dateForm(ev) {
    // fillDate.innerHTML = dateInput.value;
    if (ev.target.id === "date") {
        if (ev.target.value.trim() === "") {
            fillDate.innerHTML = "Fecha y hora";
        } else {
            fillDate.innerHTML = dateInput.value;
        }
    }
}

dateInput.addEventListener("change", dateForm);

fillForm.addEventListener("input", handleForm);

const eventPreview = document.querySelector(".js-eventPreview");
const birthdayInput = document.querySelector(".js-birthdayEvent");
const weddingInput = document.querySelector(".js-weddingEvent");
const partyInput = document.querySelector(".js-partyEvent");

function updateEvent(eventType){
    eventPreview.className = 'invitation';
    eventPreview.classList.add(eventType);
}

weddingInput.addEventListener("click",() => 
    updateEvent('wedding_image_preview'));

birthdayInput.addEventListener("click",() => 
    updateEvent('birthday_image_preview'));

partyInput.addEventListener("click",() => 
    updateEvent('party_image_preview'));

