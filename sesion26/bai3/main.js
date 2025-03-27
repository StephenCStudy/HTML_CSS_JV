function filterValidEmails(emailList) {
    if (!Array.isArray(emailList)) {
        return "Dữ liệu không hợp lệ";
    }
    let validEmails = emailList.filter(email => typeof email === "string" && email.includes("@") && !email.includes(" "));
    return validEmails;
}

let input1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let input2 = [];
let input3 = "abc";

console.log(filterValidEmails(input1)); 
console.log(filterValidEmails(input2)); 
console.log(filterValidEmails(input3)); 
