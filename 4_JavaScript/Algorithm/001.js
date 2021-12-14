// 알고리즘 측정 방법
// 1. 시간 복잡도: 얼마나 많은 시간이 걸렸는가
// 2. 계산 복잡도: 얼마나 많은 반복을 하였는가
// 3. 공간 복잡도: 얼마나 많은 공간을 차지하는가

// 플랫폼에 익숙해져야 한다. (프로그래머스, 구름EDU 등)
// - 사용 가능 라이브러리는 미리 확인!
// 언어 선택(속도 : C++, 풀이 : Python)
// 코드 스니펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익다익스트라)), Cheat sheet 와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두기

// 빈 배열 만들기
let x = Array(10);
x.fill(0);
x.length = 20;
".".repeat(9).split(".");
Array.from("a".repeat(10));

// 몸풀기 2문제 - 1번 정답
// 정답
Array(100).fill(1).map((value, index)=>value+index);

Array(100).fill(1).map((value, index)=>value+index) + ''

(Array(100).fill(1).map((value, index)=>value+index) + '').split('8');

(Array(100).fill(1).map((value, index)=>value+index) + '').split('8').length - 1;

'1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2'.split(/8/g);

'1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2'.split(/8/g).length - 1;

///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 몸풀기 2문제 - 2번 정답
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
// for (let i = 0; i < s.length-1; i++) {
//     console.log(s[i+1], s[i])
//     console.log(s[i+1] - s[i])
// }
for (let i = 1; i < s.length; i++) {
    // console.log(s[i], s[i-1])
    // console.log(s[i] - s[i-1])
    arr.push(s[i] - s[i-1])
}

// arr.indexOf(5)
// let result = arr.indexOf(Math.min.apply(null, arr));
// Math.min(...arr)
let result = arr.indexOf(Math.min(...arr));
console.log(s[result], s[result+1]);


// 몸풀기 2문제 - 2번 정답(다른 풀이)
let s  = [1, 3, 4, 8, 13, 17, 20];
// let ss = [3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
// zip([1, 3, 4], [10, 20, 30]);
// zip(s.slice(), s.slice(1)).slice(0, -1)
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// -1 순서 유지
// 1 순서 바꿈
// 오름차순 정렬 : 
//    뒤에 값이 더 크면 순서 유지
//    뒤에 값이 작으면 순서 바꿈

function compare(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1;
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1;
    }
    return 0;
}

pairs.sort(compare)
pairs.sort(compare)[0]


//////// 쉬운 풀이 /////////

let s  = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다!
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
    // console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result)