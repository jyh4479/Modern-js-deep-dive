const increase = () => {
    let num = 0;
    return ++num;
}

// console.log(increase()); // 1
// console.log(increase()); // 1
// console.log(increase()); // 1

const increase2 = (function () {
    let num = 0;
    return () => {
        return ++num;
    }
}());

// console.log(increase2()); // 1
// console.log(increase2()); // 2
// console.log(increase2()); // 3

const Counter = (function () {
    let num = 0;

    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    }
}());

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());