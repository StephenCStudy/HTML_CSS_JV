let input = document.getElementById("input");
let button = document.getElementById("btn");

button.addEventListener("click", function () {
  let text = input.value;
  alert(`Xin chào ${text}`);
  localStorage.setItem("name", text);
  input.value = "";
});

function show (){
    let name = localStorage.getItem("name") || [];
  alert(`Xin chào ${name}`);
}
show ();