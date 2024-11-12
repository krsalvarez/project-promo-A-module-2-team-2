let dataForm = {
    field1: 0,
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    photo: ""
}
const createButton = document.querySelector(".js-create");
const linkCard = document.querySelector(".js-showCard");

function handleShareClick(event) {

    fetch('https://dev.adalab.es/api/info/data', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            //data es lo que me devuelve el servidor
            const idCard = data.infoID;
            //mostrar el enlace para ver la tarjeta
            linkCard.classList.remove("hidden");
            linkCard.href = `./cardDetails.html?id=${idCard}`;

        })
}

createButton.addEventListener("click", handleShareClick);
