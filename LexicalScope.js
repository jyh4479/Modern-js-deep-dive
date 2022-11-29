var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();
bar();

// 예상 답
// 1
// 1

// 실제 답
// 1
// 1

// --> js는 lexical scope를 따르므로 함수를 어디서 호출했는지가 아니라 정의했는지에 따라 상위 scope가 결정된다.