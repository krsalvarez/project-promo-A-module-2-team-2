let dataForm = {
    field1: 0,
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    photo: ""
}
const createButton = document.querySelector(".js-create");

function handleShareClick() {
    console.log("ha hecho click");
    fetch('https://dev.adalab.es/api/info/data', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })


}



createButton.addEventListener("click", handleShareClick);
