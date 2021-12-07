// 클래스 - 붕어빵 찍는 틀
// 인스턴스 - 붕어빵

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi(name) {
        console.log(this.name);
    }
}

let me = new User("Raekyu");
