let x = 10;

// if 문
if (x < 100) {
    console.log("100보다 작아요!");
    if (x > 5) {
        console.log("5보다 커요!");
    }
}

// if, else if , else 문
if (x < 5) {
    console.log("조건-1 일 때");
}

else if (x < 10) {
    console.log("조건-2 일 때");
}

else {
    console.log("예외 일 때");
}

let result = 0;

// switch 문
switch (x) {
    case 1:
        console.log("case-1");
        break;
    case 5:
        console.log("case-2");
        break;
    case 10:
        console.log("case-3");
        break;
    default:
        console.log("예외");
        break;
}

// if 예제
// 0부터 100사이 3의 배수와 5의 배수의 합
for (let x = 0; x <= 100; x++) {
    // if (x % 3 == 0) {
    //     document.write(x, "<br>");
    //     result += x;
    // }
    // else if (x % 5 == 0) {
    //     document.write(x, "<br>");
    //     result += x;
    // }
    if (x % 3 == 0 || x % 5 == 0) {
        result += x;
    }
}

document.write("result: ", result, "<br>");

// if-else 에제
// 성적 별 용돈
let score = 89;
let money = 100000;

if (score >= 90) {
    document.write("mom : i'm so happy!!");
    money += 1000000;
}
else if (score >= 80) {
    document.write("mom : i'm so happy~<br>");
    money += 100000;
}
else if (score >= 70) {
    document.write("mom : i'm happy");
    money += 10000;
}
else if (score >= 60) {
    document.write("mom : happy?");
    money += 10000;
}
else {
    document.write("mom : ...");
}

// switch 예제
switch (new Date().getDay()) {
    case 0:
        document.write("일요일");
        break;
    case 1:
        document.write("월요일");
        break;
    case 2:
        document.write("화요일");
        break;
    case 3:
        document.write("수요일");
        break;
    default:
        break;
}