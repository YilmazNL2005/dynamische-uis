let doorBestellen = true
let prijs_fris = 2.50
let prijs_bier = 3.99 // prijzen van de producten in een array zetten.
let prijs_wijn = 3.75
// for loop gebruiken voor het berekenen

const prijzen = [0, 0, 0] // fris, bier, wijn
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
                console.log(gevraagde_product)
                aantal[0] += vraag_aantal;
                console.log(aantal)
            }
            if (vraag === "bier"){
                gevraagde_product[1] = vraag;
                console.log(gevraagde_product)
                aantal[1] += vraag_aantal;
                console.log(aantal)
            }
            if (vraag === "wijn"){
                gevraagde_product[2] = vraag;
                console.log(gevraagde_product)
                aantal[2] += vraag_aantal;
                console.log(aantal)
            }
        }
        else {
            alert("je moet iets bestellen dat aanwezig is.");
        }
                    }

prijzen[0] += prijs_fris * aantal[0]; // 42 tot 47 regel. in een for loop
prijzen[1] += prijs_bier * aantal[1];
prijzen[2] += prijs_wijn * aantal[2];
let afronding_fris = prijzen[0].toFixed(2);
let afronding_bier = prijzen[1].toFixed(2);
let afronding_wijn = prijzen[2].toFixed(2);
console.log(prijzen)

let totaal_bedrag = prijzen[0] + prijzen[1] + prijzen[2];
let afronding_totaal = totaal_bedrag.toFixed(2);

if ("fris" === gevraagde_product[0]){
document.write(gevraagde_product[0]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[0] +" &nbsp; - &nbsp; Prijs &nbsp; € " +afronding_fris + "<br>"); }

if ("bier" === gevraagde_product[1]){
document.write(gevraagde_product[1]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[1] +" &nbsp; - &nbsp; Prijs &nbsp; € " +afronding_bier + "<br>"); }

if ("wijn" === gevraagde_product[2]){
document.write(gevraagde_product[2]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[2] +" &nbsp; - &nbsp; Prijs &nbsp; € " +afronding_wijn + "<br>"); }

document.write("Totaalbedrag : € " + afronding_totaal)