let input1 = [
    "2025-03-10",
    "2024-12-25",
    "2023-07-01",
]
let input2 = []
let input3 = "abc"

function convert(dateArray) {
    if (!Array.isArray(dateArray)) {
        return ["sai kieu du lieu"]; 
    }

    let convertdate = dateArray.map(date => {
        if (typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
            let [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        } else {
            return null; 
        }
    }).filter(date => date !== null); 

    return convertdate;
}

function main() {
    console.log(convert(input1)); 
    console.log(convert(input2)); 
    console.log(convert(input3)); 
}

main();





