function Test1(name) {
    this.name = name;
}

const Test2 = (name) => {
    this.name = name;
}

class Test3 {
    constructor(name) {
        this.name = name;
    }
}

console.log(Test1.prototype);
console.log(Test2.prototype);
console.log(Test3.prototype);

console.log(Test1.__proto__);
console.log(Test1.__proto__.__proto__);
console.log(Test2.__proto__);
console.log(Test2.__proto__.__proto__);
console.log(Test3.__proto__);
console.log(Test3.__proto__.__proto__);