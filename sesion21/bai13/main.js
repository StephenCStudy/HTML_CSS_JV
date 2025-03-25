document.writeln("a. <br>");
for (let i = 0; i < 10; i++) {
    for(let j = i; j < 10; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}


document.writeln("<br> b. <br>");
for (let k=0; k < 10; k++){
    for(let h = k; h >0; h--) {
        document.writeln("*");
    }
    document.writeln("<br>");
}


document.writeln("<br> c. <br>");
for (let k=1; k < 10; k++){
    for(let h = 0; h < k; h++) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    for(let h = 0; h < (10-k); h++) {
        document.write("* ");
    }
    document.writeln("<br>");
}

document.writeln("<br> d. <br>");
for (let k= 0; k < 10; k++){
    for(let h = 10; h < k; h--) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    for(let h = k; h > (10-k-7); h--) {
        document.write("* ");
    }
    document.writeln("<br>");
}