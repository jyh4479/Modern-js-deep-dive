//클로저를 이해해야함
var Counter = (function () {
    var num = 0;
    return {
        getNumber() {
            return num;
        },
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    }
}());

console.log(Counter.num)

console.log(Counter.getNumber())
console.log(Counter.increase())
console.log(Counter.increase())
console.log(Counter.getNumber())
console.log(Counter.decrease())
console.log(Counter.decrease())
console.log(Counter.getNumber())
