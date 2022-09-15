

/* VALIDACIÓ DE FORMULARI PERÒ QUE NO ENVII LES DADES */


const form = document.getElementById ('container-form');
const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

form.addEventListener('submit',(event) => {
event.preventDefault();



// FETCH - API DETA//

let fullName = document.getElementById ("name-form");
let email = document.getElementById ("email-form");
let phone = document.getElementById ("phone-form");
let message = document.getElementById ("message-form");

const data = {
fullName: fullName.value,
email: email.value,
phone: phone.value,
message: message.value,
};


const body = {
    item: data
};

const fetchParams = {
    method: 'POST',
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
    },
    body: JSON.stringify(body)
};

fetch(url, fetchParams)
    .then(response => {
            if (response.ok) return response.json();

    })
    .then(json => {
        console.log ("Los datos se han enviado correctamente");
        alert ("Los datos se han enviado correctamente");
        form.reset();
        console.log(json);
    })
    .catch(error => {
        console.log("Ocurrió un error, intenta nuevamente");
        alert ("Ocurrió un error, intenta nuevamente");
    })
});


