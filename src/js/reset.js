const restartButton = document.querySelector(".js-reset");
const preview = document.querySelector(".preview-container");



function resetClick(event) {
    fillName.innerHTML = "Nombre"
    fillSurname.innerHTML = "Lugar"
    fillDate.innerHTML = "Fecha y hora"
    profileImage.style.backgroundImage = "none";
    profilePreview.style.backgroundImage = "none";
    previsualizacion.classList.remove("color-borde1", "color-borde2", "color-borde3");
    nombre.classList.remove("color-nombre1", "color-nombre2", "color-nombre3");
    lugar.classList.remove("color-lugar1", "color-lugar2", "color-lugar3");
    fechaHora.classList.remove("color-fecha-hora1", "color-fecha-hora2", "color-fecha-hora3");
    eventPreview.classList.remove("wedding_image_preview", "birthday_image_preview", "party_image_preview");
    console.log(resetClick);


}

restartButton.addEventListener("click", resetClick);

