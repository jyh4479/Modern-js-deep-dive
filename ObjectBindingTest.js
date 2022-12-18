class Person {
    constructor(name) {
        this.name = name;
    }
}

let man = new Person("yonghoon");

console.log(man);

console.log(Object.prototype.hasOwnProperty.call(man, "name"));

Object.prototype.test = function () {
    console.log(this);
}

man.test();
