let doorBestellen = true
let prijs_fris = 2.50
let prijs_bier = 3.99
let prijs_wijn = 3.75
// for loop gebruiken voor het berekenen  

//let producten = [ "fris","bier", "wijn", "stop"]
const prijzen = [0, 0, 0] // fris, bier, wijn
const aantal = [0, 0, 0] // 0: fris; 1: bier; 2: wijn;
const gevraagde_product = ["", "", ""]

while (doorBestellen){ // nietfalse naar doorbestellen  DONE
    while (true)
        {let bestellen = prompt("Wat wilt u bestellen? Keuze: fris, bier of wijn. Of liever stoppen? type: stop ") //.toLocaleLowerCase
        if (bestellen.includes("fris") || bestellen.includes("bier") || bestellen.includes("wijn") || bestellen.includes("stop"))   
            break;
        // if (bestellen != "fris" && bestellen != "bier" && bestellen != "wijn" && bestellen != "stop"){
        }
    if (bestellen === "stop"){
        doorBestellen = false    
    }else {
        let vraag_aantal = parseInt(prompt(`Hoeveel wil je van: ${bestellen} hebben?: `)) // foutcontrole 
        if (bestellen === "fris"){
            aantal[0] += Number(vraag_aantal) // Number? Bestelling moet het aantal producten krijgen dat besteld is.  
            console.log(aantal)               // Nu krijgt bestelling het berekende bedrag van wat het voor een specifiek product kost.  
        } else if(bestellen === "bier"){          // Een aparte array aanmaken om de bedragen aan toe te voegen.
            aantal[1] += Number(vraag_aantal)
            console.log(aantal)
        } else if(bestellen === "wijn"){
            aantal[2] += Number(vraag_aantal)
            console.log(aantal) 
        } 
    }
    }


const bestellingClone = aantal.slice() // line 17 t/m 22 buiten de while    DONE
        prijzen[0] = aantal[0] * prijs_fris // aparte array aanmaken 
        prijzen[1] = aantal[1] * prijs_bier // if statement gebruiken om vervolgens te controleren of het aantal groter is dan 0
        prijzen[2] = aantal[2] * prijs_wijn // for (drank of dranken) {console }
        console.log(aantal)
        console.log({bestellingClone})




// getelementbyid.innerHTML=("hoeveelheid").innertext=vraag_aantal

// Prijs
// product





// Programma vraagt wat je wilt bestellen. De keuzes die gemaakt kunnen worden zijn: fris, bier, wijn.
// Als je wilt stoppen met bestellen type stop.