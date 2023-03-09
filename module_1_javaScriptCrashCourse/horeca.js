let nietfalse = true
while (nietfalse){
    let bestellen = prompt("Wat wilt u bestellen? Keuze: fris, bier of wijn. Of liever stoppen? type: stop ") //.toLocaleLowerCase
    if (bestellen != "fris" && bestellen != "bier" && bestellen != "wijn" && bestellen != "stop"){
        alert("Dit ken ik niet.")
    } else{
        if (bestellen === "stop"){
            nietfalse = false
        }else{
            let vraag_aantal = parseInt(prompt(`Hoeveel wil je van: ${bestellen} hebben?: `))
        
            
        }
    }
}
getelementbyid.innerHTML=("hoeveelheid").innertext=vraag_aantal