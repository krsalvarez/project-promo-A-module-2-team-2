const restartButton = document.querySelector(".js-reset");
const preview = document.querySelector(".preview-container");



function resetClick() {
    fillName.innerHTML = "Nombre"
    fillSurname.innerHTML = "Apellido"
    fillDate.innerHTML = "Fecha y hora"

}

restartButton.addEventListener("click", resetClick);

