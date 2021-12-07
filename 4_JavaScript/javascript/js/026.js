// prototype: 유전자 (상속받은 객체)
// __proto__: [[prototype]]에 접근하기 위한 방법
//            비표준으로 시작하였지만 현재는 표준 부록에 실렸다.

// 프로토타입의 for...in 반목문
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys는 객체 자신의 키만 반환합니다.
console.log(Object.keys(rabbit)); // jumps

// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
for(let prop in rabbit) {
    console.log(prop);
} // jumps, eats