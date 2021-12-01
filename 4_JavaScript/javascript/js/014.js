//객체 (object)
function sum(x, y){
  return x + y;
}

let person = {
  //key: value
  name: "오래규",
  age: 25,
  height: 176,
  weight: 70,
  이력: {
    "첫번째직장" : "하나",
    "두번째직장" : "둘"},
  기능: sum
}
person.소속 = '바울랩';

// .(dot)으로 호출
console.log("이름 :", person.name);
console.log("나이 :", person.age);

// [] 대괄호로 호출
console.log("신장 :", person["height"]);
console.log("몸무게 :", person["weight"]);

console.log("소속 :", person.소속);
console.log("이력 :", person.이력.첫번째직장);
console.log("기능 :", person.기능(10, 20));