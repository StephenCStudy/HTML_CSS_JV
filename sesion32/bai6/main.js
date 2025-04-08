let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let text = document.getElementById("text");

btn1.addEventListener("click", function () {
    text.style.fontSize = "40px";
});

btn2.addEventListener("click", function () {
    text.style.fontSize = "16px"; 
});