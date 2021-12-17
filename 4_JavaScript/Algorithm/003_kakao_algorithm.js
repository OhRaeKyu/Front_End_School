// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 1-1. 비밀 지도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
// 2진법, 진법 연산, replace, or 연산
function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        let binaryNum = (arr1[i] | arr2[i]).toString(2);
        binaryNum = "0".repeat(n - binaryNum.length).concat(binaryNum);
        answer.push(binaryNum.replace(/1/g, "#").replace(/0/g, " "));
    }
    return answer;
}

// 1-2. 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript
// 문자열 parsing
function solution(dartResult) {
    let answer = 0;
    let numArray = [];
    let j = 0;
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i+1] == 0) {
                numArray[j] = 10;
                i++;
            }
            else {
                numArray[j] = parseInt(dartResult[i]);
            }
            j++;
        }
        else {
            if (dartResult[i] === "S") {
                continue;
            }
            else if (dartResult[i] === "D") {
                numArray[j-1] **= 2;
            }
            else if (dartResult[i] === "T") {
                numArray[j-1] **= 3;
            }
            else if (dartResult[i] === "*") {
                numArray[j-1] *= 2;
                numArray[j-2] *= 2;
            }
            else {
                numArray[j-1] = -(numArray[j-1]);
            }
        }
    }
    numArray.forEach(x => answer += x);
    return answer;
}

// 1-3. 캐시
// https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
// LRU 알고리즘, 페이지 교체 알고리즘
function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase();
        let hitIndex = cache.indexOf(city)
        if (hitIndex !== -1) {
            cache.splice(hitIndex, 1);
            cache.push(city);
            answer += 1;
        }
        else {
            answer += 5;
            cache.push(city);
            if (cache.length > cacheSize) {
                cache.shift();
            }
        }
    }
    return answer;
}

// 1-4. 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889
// 전체 스테이지의 개수 N
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
// 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// function solution(N, stages) {
//     N = 5;
//     stages = [2, 1, 2, 6, 2, 4, 3, 3];
//     let answer = [];
//     let failCount = new Array(N);
//     failCount.fill(0);
//     let reachCount = new Array(N);
//     reachCount.fill(0);
//     let failRate = new Array(N);
//     let failRateSort = new Array(N);

//     let userSize = stages.length;
//     console.log(typeof userSize + ":" + userSize);
//     for (value of stages) {
//         if (value <= N){
//             for (let i = 0; i < value; i++) {
//                 reachCount[i] += 1;
//             }
//             failCount[value - 1] += 1;
//         }
//         else {
//             reachCount[N-1] += 1;
//             failCount[value - 2] += 1;
//             continue;
//         }
//     }

//     for (let i = 0; i < N; i++) {
//         failRate[i] = failCount[i]/reachCount[i]
//     }

//     failRateSort = failRate;
//     failRateSort.sort((a, b) => b - a);
    
//     for (let i = 0; i < N; i++) {
//         answer.push(failRate.indexOf(failRateSort[i]));
//     }

//     console.log(failCount);
//     console.log(reachCount);

//     return answer;
// }

function solution(N, stages) {
    N = 5;
    stages = [2, 1, 2, 6, 2, 4, 3, 3];
    let answer = [];
    let result = [];

    for (let i = 1; i <= N; i++) {
        let reachCount = 0;
        let failCount = 0;
        let failRate = 0;
        
        reachCount = stages.filter(ele => ele >= i).length;
        failCount = stages.filter(ele => ele === i).length;
        if (reachCount === 0) {
            failRate = 0;
        }
        else {
            failRate = failCount/reachCount;
        }
        result[i-1] = {idx: i, rate: failRate};
    }
    result.sort((a, b) => b.rate - a.rate).forEach(x => answer.push(x.idx));
    return answer;
}

// N : 5 stages : [2, 1, 2, 6, 2, 4, 3, 3]
// 2. 19년도
// 3. 20년도
// 4. 21년도