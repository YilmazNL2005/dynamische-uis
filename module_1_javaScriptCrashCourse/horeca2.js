let doorBestellen = true
const prijzen = [2.50, 3.99, 3,75]
const kosten = [0, 0, 0] // fris, bier, wijn
const aantal = [0, 0, 0] // 0: fris; 1: bier; 2: wijn;
const gevraagde_product = []
let producten = ["fris", "bier", "wijn"]

while (doorBestellen){ // fris, bier of wijn. Anders stoppen typ stop.
    vraag = prompt("Wat wilt u bestellen? of stop? ");
    let arraycontain = producten.includes(vraag);
        if(vraag === "stop"){doorBestellen = false;}
        else if (arraycontain === true){ // if (vraag in producten)
            let vraag_aantal = parseInt(prompt(`Hoeveel wil je van: ${vraag} hebben?: `));
            if (vraag === "fris"){
                gevraagde_product[0] = vraag;
                aantal[0] += vraag_aantal;
            }
            if (vraag === "bier"){
                gevraagde_product[1] = vraag;
                aantal[1] += vraag_aantal;
            }
            if (vraag === "wijn"){
                gevraagde_product[2] = vraag;
                aantal[2] += vraag_aantal;
            }
        }
        else {
            alert("je moet iets bestellen dat aanwezig is.");
        }
}

for (let x = 0; x < gevraagde_product.length; x++) {
    kosten[x] += prijzen[x] * aantal[x]; // 42 tot 47 regel. in een for loop
};

let afronding_fris = kosten[0].toFixed(2);
let afronding_bier = kosten[1].toFixed(2);
let afronding_wijn = kosten[2].toFixed(2);

let totaal_bedrag = kosten[0] + kosten[1] + kosten[2];
let afronding_totaal = totaal_bedrag.toFixed(2);

if ("fris" === gevraagde_product[0]){
document.write(gevraagde_product[0]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[0] +" &nbsp; - &nbsp; Prijs &nbsp; € " +afronding_fris + "<br>"); }

if ("bier" === gevraagde_product[1]){
document.write(gevraagde_product[1]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[1] +" &nbsp; - &nbsp; Prijs &nbsp; € " +afronding_bier + "<br>"); }

if ("wijn" === gevraagde_product[2]){
document.write(gevraagde_product[2]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[2] +" &nbsp; - &nbsp; Prijs &nbsp; € " +afronding_wijn + "<br>"); }

document.write("Totaalbedrag : € " + afronding_totaal)
////////////////////////////////////////////////////////////////////////////////