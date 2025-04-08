let valu = document.getElementById("progress");
let up = document.getElementById("start");
let down = document.getElementById("stop");

valu.getAttribute("value") 

up.addEventListener("click", function () {
    valu.setAttribute("value", "100");
    valu.setAttribute("max", "100");    
    valu.style.width = "100%";
    valu.style.backgroundColor = "green";
    valu.style.transition = "width 5s ease-in-out";
    valu.innerHTML = "100%";
}
);

down.addEventListener("click", function () {
    valu.setAttribute("value", "0");
    valu.setAttribute("max", "100");    
    valu.style.width = "0%";
    valu.style.backgroundColor = "red";
    valu.style.transition = "width 5s ease-in-out";
    valu.innerHTML = "0%";
}
);