class Book {
    constructor(title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page;
    }
}
 
const book = new Book('JavaScript Basics','John Smith','200');
delete book.page;

console.log(book); 