let hour = Number(prompt("nhap vao gio(0-23): "));
let minute = prompt("nhap vao phut(0-59): ");
let secound = prompt("nhap vao giay(0-59): ");


if ( hour >= 12){
    alert( (hour - 12) +":" + minute + ":" + secound + " " + "PM");
} else if ( hour < 12 && hour > 0){
   alert( (hour ) +":" + minute + ":" + secound + " " + "AM");
} else {
    alert ( "i don't know what you want to say");
}