let btn = document.getElementById("btn");
let count = 0;
let output = document.getElementById("output");

btn.addEventListener("click", function () {
  count++;
  output.textContent = `Click count: ${count}`;
});