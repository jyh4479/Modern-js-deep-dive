//JS를 제외한 나머지 C++, JAVA의 this는 항상 클래스가 생성하는 인스턴스를 가리킨다.
//JS는 호출 방식에 따라 달라진다.
//JS의 this는 함수 호출시 동적으로 결정된다.

const foo = function (test) {
    console.dir(this);
    console.log(test);
}

foo();

const obj = {foo};
obj.foo();

new foo();

const bar = {name: 'bar'};

foo.call(bar, "name");
foo.apply(bar, ["name"]);
foo.bind(bar)("name");