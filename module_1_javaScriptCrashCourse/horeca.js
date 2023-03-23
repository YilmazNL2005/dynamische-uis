let nietfalse = true
let prijs_bier = 3.99
let prijs_wijn = 3.75
let prijs_fris = 2.50 
// for loop gebruiken voor het berekenen  

const bestelling = [0, 0, 0] // 0: fris; 1: bier; 2: wijn;
const gevraagde_product = ["", "", ""]

while (nietfalse){ // nietfalse naar doorbestellen
    while (true)
        {let bestellen = prompt("Wat wilt u bestellen? Keuze: fris, bier of wijn. Of liever stoppen? type: stop ") //.toLocaleLowerCase
        if (bestellen in ["bier", "wijn", "fris", "stop"])    
            break;
        // if (bestellen != "fris" && bestellen != "bier" && bestellen != "wijn" && bestellen != "stop"){
        alert("Dit ken ik niet.")}
    if (bestellen === "stop"){
        nietfalse = false
        const bestellingClone = bestelling.slice() // line 17 t/m 22 buiten de while
        bestelling[0] = bestelling[0] * prijs_fris // aparte array aanmaken 
        bestelling[1] = bestelling[1] * prijs_bier // if statement gebruiken om vervolgens te controleren of het aantal groter is dan 0
        bestelling[2] = bestelling[2] * prijs_wijn // for (drank of dranken) {console }
        console.log(bestelling)
        console.log({bestellingClone})
    }else {
        let vraag_aantal = parseInt(prompt(`Hoeveel wil je van: ${bestellen} hebben?: `)) // foutcontrole 
        if (bestellen === "fris"){
            bestelling[0] += Number(vraag_aantal) // Number?
            console.log(bestelling)
            gevraagde_product.push(bestellen); // niet nodig
            console.log(gevraagde_product) // niet nodig
        } else if(bestellen === "bier"){
            bestelling[1] += Number(vraag_aantal)
            console.log(bestelling)
            gevraagde_product.push(bestellen);
            console.log(gevraagde_product)
        } else if(bestellen === "wijn"){
            bestelling[2] += Number(vraag_aantal)
            console.log(bestelling) 
            gevraagde_product.push(bestellen);
            console.log(gevraagde_product)
        } 
    }
    }     
}

// getelementbyid.innerHTML=("hoeveelheid").innertext=vraag_aantal

// Prijs
// product
// 