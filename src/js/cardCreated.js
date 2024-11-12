"use strict";

const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");
const nameCard = document.querySelector(".js-fillName");
const locationCard = document.querySelector(".js-fillSurname");
const dateCard = document.querySelector(".js-fillDate");
const imageCard = document.querySelector('.js__profile-preview');
// const eventCard = document.querySelector(".js-eventPreview");
// const paletteCard = document.getElementById("previsualizacion");



fetch(`https://dev.adalab.es/api/info/${id}`)
    .then(response => response.json())
    .then(data => {
        const cardData = data.data;
        console.log(cardData);
        nameCard.innerHTML = cardData.field2;
        locationCard.innerHTML = cardData.field3;
        dateCard.innerHTML = cardData.field4;
        imageCard.src = cardData.photo;
        // eventCard.style = cardData.field5;
    })