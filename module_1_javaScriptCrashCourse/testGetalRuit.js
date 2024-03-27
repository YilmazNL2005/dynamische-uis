
// let aantal = prompt("Welk cijfer wil je voor je cijferruit?");
// let bovenste_helft = 0;
// let onderste_helft = 0;

// // bovenste helft

// for (let i = 1; i <= aantal; i++) {
//   let number = i;
//   bovenste_helft += number;
//   document.getElementById("demo").innerText += bovenste_helft + "\n";
//   if (i == aantal) {
//     bovenste_helft += "";
//   } else {
//     bovenste_helft += "-";
//   }
// }


// onderste_helft = bovenste_helft;

// // onderste helft

// for (let i = aantal; i >= 1; i--) {
//   onderste_helft = onderste_helft.replace(i, "");
//   numberstr3 = reverseString(onderste_helft);
//   onderste_helft = numberstr3.replace("-", "");
//   onderste_helft = reverseString(onderste_helft);
//   document.getElementById("demo").innerText += onderste_helft + "\n";
// }


// function reverseString(str) {
//   return str.split("").reverse().join("");
// }







// bovenste helft

 
//   
//   if (i == aantal) {
//     bovenste_helft += "";
//   } else {
//     bovenste_helft += "-";
//   }



// onderste_helft = bovenste_helft;

// // onderste helft
// for (let i = aantal; i >= 1; i--) {
//   onderste_helft = onderste_helft.replace(i, "");
//   numberstr3 = reverseString(onderste_helft);
//   onderste_helft = numberstr3.replace("-", "");
//   onderste_helft = reverseString(onderste_helft);
//   document.getElementById("demo").innerText += onderste_helft + "\n";
// }


// function reverseString(str) {
//   return str.split("").reverse().join("");
// }




let text = ""
let i = 1;
let bovenste_helft = 0;
let onderste_helft = 0;

let begin = 1
let max_aantal = prompt("vanaf 1 tot welk getal wil je zien?");

for (let begin = 1; begin <= max_aantal; i++) {
    let nummer = begin;
    bovenste_helft += number;
    document.getElementById("demo").innerText += bovenste_helft + "\n"
}

function reverseString(str) {
    return str.split("").reverse().join("");
     }