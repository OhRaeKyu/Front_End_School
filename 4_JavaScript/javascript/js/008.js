let cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

for (let i = 0; i < cars.length; i++){
    console.log(`자동차 배열: ${cars[i]}`);
}

// for 문의 다른 형태
let array = [10, 20, 30, 40, 50];
let i = 0;;

for (;i<array.length;) {
    document.write(array[i], "<br>");
    i++;
}

document.write("<br>");

// array.forEach(e => console.log(e*3));

// for in 문
for (let index in array) {
    document.write(index, "<br>");
    // document.write(array[index], "<br>");
}

document.write("<br>");

// for of 문
let sum = 0;
for (let variable of array) {
  sum += variable;
}
document.write(sum/array.length);

// 예제
// 모든 수의 합
let result = 0;
for (let i = 1; i <= 100; i++) {
    result += i;
}
console.log(result);

// 짝수의 합
// let result = 0;
// for (let i = 2; i <= 100; i+=2) {
//     result += i;
// }
// console.log(result);

// 구구단
for (let i = 1; i < 10; i++){
    for (let j = 1; j < 10; j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

// // 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)
// // 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// let arrS = [1, 3, 4, 8, 13, 17, 20];
// let sub = arrS[1] - arrS[0];
// let j = 0;

// for (let i = 1; i < arrS.length; i++){
//     if ((arrS[i] - arrS[i-1]) < sub){
//         sub = (arrS[i] - arrS[i-1]);
//         j = i;
//     }
// }
// console.log(arrS[j-1], arrS[j]);

// // 1부터 10000 사이에 존재하는 8의 갯수
// let strS = "";
// let cnt = 0;

// for (let i = 1; i <= 10000; i++) {
//     strS += i;
// }

// for (let i = 0; i < strS.length; i++) {
//     if (strS[i] == 8){
//         cnt += 1;
//     }
// }

// console.log(cnt);