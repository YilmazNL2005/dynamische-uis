
let tempstopchecknotfalse = true
while (tempstopchecknotfalse){
    let bestellen = prompt("Wat wilt u bestellen? Keuze: fris, bier of wijn. Of liever stoppen? type: stop ").toLocaleLowerCase
    if (bestellen != "fris" && bestellen != "bier" && bestellen != "wijn"){
        alert("Dit ken ik niet.")
    } else{
        if (bestellen === "stop"){
            tempstopchecknotfalse = false
        }else{
            let vraag_aantal = parseInt(prompt(`Hoeveel wil je van: ${bestellen} hebben?: `))
        
            
        }
    }
}