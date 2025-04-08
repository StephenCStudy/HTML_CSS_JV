let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let body = document.getElementById("body");

btn2.addEventListener("click", function () {
    body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    box2.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
});

btn1.addEventListener("click", function () {
    body.style.backgroundColor = "white";
});