let input = document.getElementById("inputPassword2");
let submit = document.getElementById("btn");
let list = document.getElementById("list");

submit.addEventListener("click", function (e) {
    e.preventDefault();
  let text = input.value;
  if (text === "") {
    alert("Không được để trống ");
  } else {
    let li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
  }
});
