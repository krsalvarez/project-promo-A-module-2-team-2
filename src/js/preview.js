/*
    -crear formulario y tarjeta visualización
    -seleccionar todos los elementos del HTLM
    -recoger cuando la usuaria escriba la información en cada input
    -pintar en la tarjeta
*/

const nameInput = document.querySelector(".js-formName")
const surnameInput = document.querySelector(".js-formSurname")
const dateInput = document.querySelector(".js-date")
const fillName = document.querySelector(".js-fillName")
const fillSurname = document.querySelector(".js-fillSurname")
const fillDate = document.querySelector(".js-fillDate")
const fillForm = document.querySelector(".js-fill")

function handleForm(event) {
    if (event.target.id === "firstName") {
        fillName.innerHTML = event.target.value;
    }
    else if (event.target.id === "surname") {
        fillSurname.innerHTML = event.target.value;
    }

}
function dateForm() {
    fillDate.innerHTML = dateInput.value;
}

dateInput.addEventListener("change", dateForm);


fillForm.addEventListener("input", handleForm);

