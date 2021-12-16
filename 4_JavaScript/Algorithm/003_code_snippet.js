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
            console.log("숫자가 10인가 ? : " + (dartResult[i] == 1 && dartResult[i+1] == 0))
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
        console.log(numArray);
    }
    numArray.forEach(x => answer += x);
    return answer;
}
console.log(solution("1D2S#10S"));

    for (let i = 0; i < dartResult.length; i++) {
        // console.log(dartResult[i]);
        if (dartResult[i] >= 0 && dartResult[i] <=9 ) {
            if (dartResult[i] == 1 && dartResult[i+1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }
        } else if (dartResult[i] == 'S'){
            answer.push(temp);
        } else if (dartResult[i] == 'D'){
            // answer.push(Math.pow(temp, 2));
            answer.push(temp**2);
        } else if (dartResult[i] == 'T'){
            // answer.push(Math.pow(temp, 3));
            answer.push(temp**3);
        } else if (dartResult[i] == '*'){
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
        } else if (dartResult[i] == '#'){
            answer[answer.length-1] *= -1;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        result += answer[i];
    }
    return result;
}
// 1S2D*3T // 37
// 1D2S#10S // 9


// 1D2S0T // 3
// 1S*2T*3S  // 23

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
// 2. 19년도
// 3. 20년도
// 4. 21년도