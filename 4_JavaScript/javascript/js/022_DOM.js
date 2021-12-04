// 해당하는 Id를 가진 요소에 접근하기
// let item1 = document.getElementById("IdName");
// 해당하는 클래스를 가진 모든 요소에 접근하기
// let item2 = document.getElementsByClassName("ClassName");
// 해당하는 모든 요소에 접근하기
// console.log(document.getElementsByTagName("TagName"));

// console.log(document.getElementsByClassName("item-second")[0].nodeValue);
// console.log(document.getElementsByTagName("li")[0]);

// 현재는 querySelector만 사용 권장
const item1 = document.querySelector('.item-second');
console.log(item1);