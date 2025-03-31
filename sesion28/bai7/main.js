let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];


function checkStudent(student) {
    let sum = student.scores.math + student.scores.english + student.scores.literature;
    let average = sum / 3;
    return average >= 8;
}

const newStudent = students.filter(checkStudent);
console.log(`hs tren 8: ${newStudent}`);