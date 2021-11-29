let cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

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
// let sub = 9999;
// let j = 0;

// for (let i = 1; i < arrS.length; i++){
//     if ((arrS[i] - arrS[i-1]) < sub){
//         sub = (arrS[i] - arrS[i-1]);
//         j = i;
//     }
// }

// console.log(arrS[j-1], arrS[j]);

