class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const person = new Person('Jane Doe', 30, 'Engineer');
console.log(person.name, person.age, person.job);