
/*
Cuando la usuaria haga click en la pestaña diseño queremos que:
 - el arrow mire hacia abajo
 - queremos que despliegue la pestaña diseño
cuando ususaria haga click en la pestaña diseño desplegada queremos que:
el arrow mire hacia arriba
desaparece el desplegable diseño
*/

const design = document.querySelector (".js-design");
const colorsEvent = document.querySelector(".js-collapse");
const arrow = document.querySelector(".js-arrow");
const handleClick = () => {
    colorsEvent.classList.toggle("hidden");
    arrow.classList.toggle("icon");

}

design.addEventListener("click", handleClick); 

const collapseForm = document.querySelector(".js-fill");
const filledForm = document.querySelector(".js-formFill");
const arrowFill = document.querySelector(".js-arrow-fill");
const handleClickFill = () => {
    collapseForm.classList.toggle("hidden");
    arrowFill.classList.toggle("icon");
}

filledForm.addEventListener("click", handleClickFill);

