"use strict";

const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");
const nameCard = document.querySelector(".js-fillName");
const locationCard = document.querySelector(".js-fillSurname");
const dateCard = document.querySelector(".js-fillDate");
const imageCard = document.querySelector('.js__profile-preview');
const eventCard = document.querySelector(".js-eventPreview");
const paletteCard = document.getElementById("previsualizacion");

const backgroundClass =

    fetch(`https://dev.adalab.es/api/info/${id}`)
        .then(response => response.json())
        .then(data => {
            const cardData = data.data;
            console.log(cardData);
            nameCard.innerHTML = cardData.field2;
            locationCard.innerHTML = cardData.field3;
            dateCard.innerHTML = cardData.field4;
            // imageCard.style.backgroundImage = `url(${cardData.photo})`;
            // const palettesCard = `palette-${cardData.field1}`;

            // paletteCard.classList.add(`background-${cardData.field5}`);
        })