const CounterTest = (function () {
    let num = 0;

    function Counter() {
        // 여기에 변수 선언하면 public임
        this.test = 0;
    }

    Counter.prototype.increase = function () {
        return ++num;
    };

    Counter.prototype.decrease = function () {
        return --num;
    };

    return Counter;
}());

const counter = new CounterTest();

console.log(counter.increase());
console.log(counter.decrease());
console.log(counter);