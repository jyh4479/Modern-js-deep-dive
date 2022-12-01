// const a = {};
// const b = {data: 1};
//
// console.log(a.prototype)
// console.log(b.prototype)
// console.log(Object.prototype)


////////////////////////////////////////////////////


class Man {
    constructor(name) {
        this.name = name;
    }
}

const jyh = new Man("yonghoon");

Man.prototype.work = function () {
    console.log(`${this.name} do work`);
}

console.log(Man.__proto__);
console.log(Man.prototype);
console.log(jyh.__proto__);
console.log(jyh.__proto__.__proto__);
console.log(Man.prototype.__proto__);

////////////////////////////////////////////////////

function Person(name) {
    this.name = name;
}

const me = new Person("Lee");

Person.prototype.work = function () {
    console.log("work man");
}

console.log(Person.__proto__);
console.log(Person.prototype);
console.log(me.__proto__);
console.log(me.__proto__.__proto__);
console.log(Person.prototype.__proto__);