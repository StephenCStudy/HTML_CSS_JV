let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let purple = document.getElementById("purple");

let savedColor = localStorage.getItem("color");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}

red.onclick = function() {
    setColor("red");
};
blue.onclick = function() {
    setColor("blue");
};
yellow.onclick = function() {
    setColor("yellow");
};
purple.onclick = function() {
    setColor("purple");
};

function setColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("color", color); 
}