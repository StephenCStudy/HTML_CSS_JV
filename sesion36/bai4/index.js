let isDarkModeOn = JSON.parse(localStorage.getItem("isDarkModeOn")) || false;

if(isDarkModeOn) {
    document.body.classList.add("dark-mode");
    document.querySelectorAll(".buy-btn").forEach(btn => btn.classList.add("dark-mode"));
}

document.getElementById("mode-icon").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".buy-btn").forEach(btn => btn.classList.add("dark-mode"));
    isDarkModeOn = !isDarkModeOn;
    localStorage.setItem("isDarkModeOn", JSON.stringify(isDarkModeOn));
});