/*

promise와 async / await의 차이가 문법적 설탕으로 알고있기 했지만 async / await의 동작 원리를 제대로 알고있지 못헀다.
아래 테스트를 통해 내가 알고있는 원리와 같게 동작하는지 확인해본다.

*/

const promiseFunction = () => {
    return new Promise((resolve, reject) => {
        resolve("TEST_VALUE");
    });
};

const AsyncAwaitTest = async () => {
    console.log("--- Test code start ---");

    /*

    내가 잘못 알고있던 부분 - await이 걸리면 js를 처리하는 모든 부분이 멈추는줄 알고있었음
    하지만 결과에서도 나왔듯이 await을 만나게되면 해당 함수를 멈추고 다른 함수인 console.log("HI") 동작을 진행 후
    다시 AsyncAwaitTest 함수를 실행

    - 결국은 Promise then을 사용했을때랑 코드만 조금 다를뿐 같은 동작 원리와 결과를 사용하므로 문법 설탕임 (실제 async/await도 promise then으로 구현)

    */
    const value = await promiseFunction();
    console.log(value);

    console.log("--- Test code end ---");
};

AsyncAwaitTest();
console.log("HI");