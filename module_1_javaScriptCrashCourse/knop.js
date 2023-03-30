const button = document.createElement("button");
button.innerText = "Click here";


button.addEventListener("click", () => {
    document.getElementById("demo").style.font = "italic bold 20px arial,serif";
    alert("You clicked the button!");
});

document.body.appendChild(button);