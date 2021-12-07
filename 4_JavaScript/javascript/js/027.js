// 클래스 - 붕어빵 찍는 틀
// 인스턴스 - 붕어빵

class User {
    age = new Number();
    height = new Number();
    weight = new Number();
    #person = true;
    
    constructor(name) {
        this.name = name;
    }

    sayHi(name) {
        console.log(this.name);
    }
}

let me = new User("Raekyu");
me.sayHi();

// 상속
class Animal {
    constructor(name) {
    this.speed = 0;
    this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name} 이/가 멈췄습니다.`);
    }
}
// Animal을 Rabbit으로 상속 시킨다.
// Rabbit이 Animal을 상속 받는다.
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} 이/가 숨었습니다!`);
    }
}
  
let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!

// 정적 메서드와 정적 프로퍼티
// 거의 사용하지 않음
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

// 사용법
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS