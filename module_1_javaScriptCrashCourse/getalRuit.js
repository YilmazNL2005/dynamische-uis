let max_aantal = Number(prompt("vanaf 1 tot welk getal wil je zien?"));

for(let z = 1; z < max_aantal + 1; z++){
  for(let x = 0; x < z; x++){
    if (x < z - 1){
      document.write(x + 1 + " - ")
    } else{
        document.write(x + 1)
    }
  }
  document.write("<br>")
}
for(let z = max_aantal; z > 1; z--){
  for(let x = 1; x < z; x++){
    if (x < z - 1){
      document.write(x + " - ")
    } else{
        document.write(x)
    }
  }
  document.write("<br>")
}

// Met de prompt wordt gevraagt tot welk getal je het wilt laten tellen.
// Gebruiker vult getal in.

// Z is 1 zodat elke stap telkens 1 bij wordt toegevoegd.
// zolang Z kleiner is dan het getal wat de gebruiker heeft gegeven
// zal de teller steeds + 1 geven / erbij optellen. 
// Als dat gedaan is veranderd de 1 van Z naar een 2.


// do {
//   text += i + " - <br> " + begin++ ;
//   i++;
// }
// while (i <= max_aantal);  

// document.getElementById("demo").innerHTML = text;

// createElement
// getElementById
// appendChild