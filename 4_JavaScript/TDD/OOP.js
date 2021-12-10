// 객체 지향 프로그래밍
// Object-Oriented Programming

// 1. 모듈 패턴
function Person() {
    let age = 35;
    return {
        getAge: function() {
            return age;
        },
        setAge: function(data) {
            age = data;
        }
    }
}

const firstPerson = Person();
console.log(firstPerson.getAge());

// 2. 사용자 정의 패턴
function PersonType() {
    this.age = 35;
}

PersonType.prototype.getAge = function() {
    return this.age;
}

const secondPerson = new PersonType();
console.log(secondPerson.getAge());
console.log(secondPerson.age);

// 3. 모듈 패턴 + 사용자 정의 패턴