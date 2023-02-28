function myFunction (giraf,struisvogel,zebra){
    let totaal = 0
    totaal = giraf * 4 + totaal
    totaal = struisvogel * 2 + totaal
    totaal = zebra * 4 + totaal
    return totaal
}
let dier1 = Number(prompt("hoeveel giraffen zijn er?"));
let dier2 = Number(prompt("hoeveel struisvogels zijn er?"));
let dier3 = Number(prompt("hoeveel zebra's zijn er?"));
alert(myFunction(dier1,dier2,dier3))
// prompt:
// Vraag via een input het aantal giraffen, zebra's en struisvogel.
//
// We hebben wat info gekregen.
// 


// <!-- <script>
// function dieren(giraf, struisvogel, zebra) {
//     return giraf + struisvogel + zebra;
//   }
//   document.getElementById("demo").innerHTML = dieren(5, 5, 5);
//   </script> -->

// let dier1 = Number(prompt(""))