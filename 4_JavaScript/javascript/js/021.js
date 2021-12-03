// Lotto 복권 번호 랜덤 추출 함수
function Lotto(numList) {
    for (let i = 0; i < 6; i++){
        randomNum = Math.floor(Math.random() * 45 + 1); // 1부터 45 사이 랜덤 숫자
        // 중복 검사
        if (numList.find(el => el === randomNum)) {
            i--;
            continue;            
        }
        else {
            numList.push(randomNum);
        }
    }
}

let n = [];
Lotto(n);
// 오름차순 정렬
n.sort(function(a, b) {return a - b;});

document.getElementById("lottoNum").innerHTML = n;