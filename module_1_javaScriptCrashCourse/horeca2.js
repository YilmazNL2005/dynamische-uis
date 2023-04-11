let doorBestellen = true
let prijs_fris = 2.50
let prijs_bier = 3.99
let prijs_wijn = 3.75
// for loop gebruiken voor het berekenen  

const prijzen = [0, 0, 0] // fris, bier, wijn
const aantal = [0, 0, 0] // 0: fris; 1: bier; 2: wijn;
const gevraagde_product = []

while (doorBestellen){ // fris, bier of wijn. Anders stoppen typ stop.
    vraag = prompt("Wat wilt u bestellen? of stop? ");
        if(vraag === "stop"){doorBestellen = false;}
        if (vraag != "fris" && vraag != "bier" && vraag != "wijn" && vraag != "stop"){
            alert("je moet iets bestellen dat aanwezig is.");
        } 
        if (vraag === "fris"){
            gevraagde_product[0] = vraag;
            console.log(gevraagde_product)
        }
        if (vraag === "bier"){
            gevraagde_product[1] = vraag;
            console.log(gevraagde_product)
        }
        if (vraag === "wijn"){
            gevraagde_product[2] = vraag;
            console.log(gevraagde_product)
        }
        if (vraag === "fris" || vraag === "bier" || vraag === "wijn"){
            let vraag_aantal = parseInt(prompt(`Hoeveel wil je van: ${vraag} hebben?: `));
            if (vraag === "fris"){
                aantal[0] += vraag_aantal;
                console.log(aantal)
            }
            if (vraag === "bier"){
                aantal[1] += vraag_aantal;
                console.log(aantal)
            }
            if (vraag === "wijn"){
                aantal[2] += vraag_aantal;
                console.log(aantal)
            }
        }
                    }

prijzen[0] += prijs_fris * aantal[0];
prijzen[1] += prijs_bier * aantal[1];
prijzen[2] += prijs_wijn * aantal[2];
let afronding_fris = prijzen[0].toFixed(2);
let afronding_bier = prijzen[1].toFixed(2);
let afronding_wijn = prijzen[2].toFixed(2);
console.log(prijzen)
// let num = 5.56789;
// let n = num.toFixed(2);
if ("fris" === gevraagde_product[0]){
document.write(gevraagde_product[0]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[0] +" &nbsp; - &nbsp; Prijs &nbsp; € " +prijzen[0] + "<br>"); }

if ("bier" === gevraagde_product[1]){
document.write(gevraagde_product[1]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[1] +" &nbsp; - &nbsp; Prijs &nbsp; € " +prijzen[1] + "<br>"); }

if ("wijn" === gevraagde_product[2]){
document.write(gevraagde_product[2]+" &nbsp; - &nbsp; Aantal &nbsp; "+ aantal[2] +" &nbsp; - &nbsp; Prijs &nbsp; € " +prijzen[2] + "<br>"); }