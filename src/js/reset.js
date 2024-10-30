const restartButton = document.querySelector(".js-reset");
const preview = document.querySelector(".preview-container");



function resetClick() {
    fillName.innerHTML = "Nombre"
    fillSurname.innerHTML = "Apellido"
    fillDate.innerHTML = "Fecha y hora"
    profileImage.style.backgroundImage = "none";
    profilePreview.style.backgroundImage = "none";
    console.log(resetClick);

}

restartButton.addEventListener("click", resetClick);

