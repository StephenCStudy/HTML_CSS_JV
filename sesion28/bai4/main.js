class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
  
    }
    getArea() {
            return this.width * this.height;
        }
}

const rectagle = new Rectangle(10,5);

console.log("Diện tích hình chữ nhật:", rectagle.getArea());