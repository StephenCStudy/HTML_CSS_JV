let box = document.getElementById("box");
let blue = document.getElementById("box1");
let red = document.getElementById("box2");
let purple = document.getElementById("box3");

function changeColor() {
    blue.addEventListener("click", function () {
        box.style.backgroundColor = "blue";
    });
    red.addEventListener("click", function () {
        box.style.backgroundColor = "red";
    });
    purple.addEventListener("click", function () {
        box.style.backgroundColor = "purple";
    });
    box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "white";
    });
}
changeColor();