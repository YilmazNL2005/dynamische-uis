
button = document.createElement("button");
button.innerHTML = "Klik Hier";
button.setAttribute("onclick", "show()");
document.body.appendChild(button)

function show(){
    alert("Hello World")
    document.getElementById("uitleg").innerHTML
}