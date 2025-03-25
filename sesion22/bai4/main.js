let input = prompt("Enter a list of numbers (separated by spaces): ");
let array = input.split(" ");
let max = -99999;

for (let i = 0; i < array.length; i++) {
  let num = parseFloat(array[i]);
  if (!isNaN(num)) {
    max = Math.max(max, num);
  } else{
    console.log("Invalid input");
  }
}

console.log("Maximum value:", max);