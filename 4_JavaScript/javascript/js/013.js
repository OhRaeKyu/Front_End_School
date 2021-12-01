// Array
let fstFruit = ['사과', '수박', '복숭아', '딸기', '바나나'];
let sndFruit = new Array(5);
let trdFruit = new Array('사과', '수박', '복숭아', '딸기', '바나나');

// Matrix Array
let matArr = [[1, 2, 3], [4, 5, 6], [7, 8 ,9]];
for (let i in matArr) {
    for (let j in matArr[i]) {
        matArr[i][j] *= 2;
    }
}

// Array 내장함수
let fruitArr = ['사과', '수박', '복숭아', '딸기', '바나나'];
let presentArr = ['체리', '멜론'];

// pop & push & shift & unshift
console.log("과일 :", fruitArr);
console.log("과일.pop() :", fruitArr.pop());    //  맨 뒤에 위치한 값을 꺼내기
console.log("과일 :", fruitArr);
console.log("과일.push() :", fruitArr.push("한라봉"));  // 맨 뒤에 특정 값을 넣기
console.log("과일 :", fruitArr);
console.log("과일.shift()", fruitArr.shift());  // 맨 앞에 위치한 값을 밀어내기
console.log("과일 :", fruitArr);
console.log("과일.unshift()", fruitArr.unshift("천혜향"));  // 맨 앞에 특정 값을 넣기
console.log("과일 :", fruitArr);

// splice : 배열의 위치에 값을 삽입하고 해당 위치로 부터 뒤에 위치한 n개를 제거 후
// .splice(1, 0, '오렌지') -> [1]에 '오렌지' 값을 넣고 뒤에 위치한 값을 0개 만큼 제거
// .splice(3, 2, '귤') -> [3]에 '귤' 값을 넣고 뒤에 위치한 값을 2개 만큼 제거
console.log("과일.splice(1, 0, '오렌지')", fruitArr.splice(1, 0, "오렌지"));
console.log("과일 :", fruitArr);
console.log("과일.splice(3, 2, '귤')", fruitArr.splice(3, 2, "귤"));
console.log("과일 :", fruitArr);

// sort : 정렬하여 저장 (default: asc)
console.log("과일.sort() :", fruitArr.sort());

// reverse : 역순으로 저장
console.log("과일.reverse() :", fruitArr.reverse());

// slice : 배열의 범위 만큼 출력
// .slice(1, 3) -> 인덱스 1이상 3미만 == [1], [2]
console.log("과일.slice(1, 3) :", fruitArr.slice(1, 3));

// join : 배열의 값들을 ()으로 이어 붙여 출력
console.log("과일.join('-') :", fruitArr.join('-'));

// concat : 배열 뒤 배열을 이어 붙여 출력
console.log("과일.conscat(과일선물) :", fruitArr.concat(presentArr));

// 배열을 문자열로 바꾸기
let fruitStr = fruitArr.toString()

console.log("과일.toString() :", fruitStr);
console.log("과일.toString()[0] :", fruitStr[0]);

// Matrix Array 연습 예제
let score = [
    // [국, 영, 수 , 사 ,과]
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]]
];

let scoreAvg = new Array(2);

for(let i =0; i < scoreAvg.length; i++){
	scoreAvg[i] = new Array(2);
}

let classAvg = new Array(2);

for (let i in score) {
    for (let j in score[i]) {
        let scoreSum = 0;
        for (let k of score[i][j]){
            scoreSum += k;
        }
        scoreAvg[i][j] = scoreSum/score[i][j].length;
    }
    // for (let j of scoreAvg[i]) {
    //     classAvg[i] += j;
    // }
    // classAvg[i] /= score[i].length;
}