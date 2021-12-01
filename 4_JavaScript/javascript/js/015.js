// 함수 선언문
function sum(a, b) {
    return a + b;
}

// 함수 표현식
let sum = function(a, b) {
    return a + b;
};

// void 함수
function fx() {
    let x = 10;
    console.log(x);
}

function fy() {
    let y = 20;
    console.log(y);
}

fx();
fy();

// return 함수
function add(a = 10, b = 20) {
    return a + b;
}

console.log(add(100, 200));
console.log(add(undefined, 200));

// parameter를 object로
function add({a = 10, b = 20}) {
    return a + b;
}

console.log(add({b: 5}));

// callback 함수 : 함수 내 혹은 인자에서 함수를 호출
function ask(question, yes, no) {
    if (confirm(question) == true) yes()
    else no();
}

function showOk() {
    alert( "동의 하셨습니다." );
}

function showCancel() {
    alert( "거절 하셨습니다." );
}

ask("동의하십니까?", showOk, showCancel);

// 재귀 함수 : 자기 자신을 내부에서 호출
let cnt = 1;
let result = 0;
function squared(n) {
    result = n**(cnt++);
    if (n > 1 && result < 100) {
        console.log(result);
        squared(n);
    }
    else {
        return;
    }
}
squared(2);