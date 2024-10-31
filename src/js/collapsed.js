
/*
Cuando la usuaria haga click en la pestaña diseño queremos que:
 - el arrow mire hacia abajo
 - queremos que despliegue la pestaña diseño
cuando ususaria haga click en la pestaña diseño desplegada queremos que:
el arrow mire hacia arriba
desaparece el desplegable diseño
*/

const design = document.querySelector(".js-design");
const colorsEvent = document.querySelector(".js-collapse");
const arrow = document.querySelector(".js-arrow");
const collapseForm = document.querySelector(".js-fill");
const filledForm = document.querySelector(".js-formFill");
const arrowFill = document.querySelector(".js-arrow-fill");


const handleClick = () => {
    colorsEvent.classList.toggle("hidden");
    arrow.classList.toggle("icon");
    if (colorsEvent.classList.contains("hidden")) {
        collapseForm.classList.remove("hidden");
        // arrow.classList.add("icon");
    }
}
/*
Cuando diseña está cerrado
rellena no puede estar cerrado
*/
design.addEventListener("click", handleClick);


const handleClickFill = () => {
    collapseForm.classList.toggle("hidden");
    arrowFill.classList.toggle("icon");
    if (collapseForm.classList.contains("hidden")) {
        colorsEvent.classList.remove("hidden");
        // arrow.classList.add("icon");
    }
}

filledForm.addEventListener("click", handleClickFill);

