// let knop = document.createElement('knopje');
// knop.innerText = 'Klik hier';
// document.body.appendChild(knop);

// function tonen() {
//     document.write("Welkom Yilmaz");
//     }

//     knop.addEventListener('knopje', tonen);


// function tonen() {
// document.getElementById("naam").innerHTML = "Welkom";
// }

// knop.addEventListener("knopje", tonen);
let counter = 0
const button = document.createElement("button");
button.innerText = "Click here";


button.addEventListener("click", () => {
    document.getElementById("naam").innerHTML="Welkom Yilmaz"
    counter += 1
    if (counter >= 2)
        button.remove()
});

document.body.appendChild(button);