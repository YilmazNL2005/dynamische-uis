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

//  fris
if (aantal[0] > 0){
    
}