function getUserInput() {
    let input = prompt("nhap vao chuoi bat ky: ");
    return input;
}

function upercase(input) {
    return input
    .toLowerCase()
    .split(' ')
    .map(kytu => kytu
    .charAt(0).toUpperCase() + kytu
    .slice(1)).join(' ');
}

function main() {
    let input = getUserInput();
    console.log(upercase(input));
}

main();





