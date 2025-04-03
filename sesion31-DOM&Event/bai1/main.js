let hide = document.getElementById("hide");
let show = document.getElementById("show");
let text = document.getElementById("text");

hide.addEventListener("click", function () {
    text.style.display = "none";
});

show.addEventListener("click", function () {
    text.style.display = "block";
});