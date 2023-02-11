let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
// Berekenen hier het aantal verdiepingen

// Met Let kan je een variabele aanmaken.
let antwoord = "Ik heb nog geen idee hoeveel verdiepingen er moeten komen :-( ";
let begin = 80
document.getElementById("antwoord").innerText = antwoord;


let totaal = Math.ceil((gewenste_aantal_autos - begin) / 120)
document.write(totaal);

window.alert(totaal);

console.log(totaal)

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik x verdiepingen nodig.")
