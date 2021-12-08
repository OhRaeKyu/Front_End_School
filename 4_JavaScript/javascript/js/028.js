// 구조 분해 할당
// 이름과 성을 요소로 가진 배열
let arr = [["Raekyu", "Oh"], 100];

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [[firstName, surname], 계좌] = arr;

console.log(firstName);
console.log(surname);
console.log(계좌);

let a = [[1, 2], [3, 4], [5, 6]]

for (let [i, j] of a){
    console.log(i, j);
}