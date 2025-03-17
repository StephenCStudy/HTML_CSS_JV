const dateA = new Date("2025-03-17");
const dateB = new Date("2025-03-14");

let days = (dateA - dateB) / (1000 * 60 * 60 * 24); // cong thuc tu mili giay sang ngay
console.log(days); 