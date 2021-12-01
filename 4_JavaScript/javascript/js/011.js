// 연습문제 1
let fstArr = [10, 20, 30, 10, 20, 30, 40, 10];
let fstSum = 0;
let fstAvg = 0;
let varience = 0;
let std = 0;

for (let i of fstArr) {
    fstSum += i;
}
fstAvg = fstSum/fstArr.length;

for (let i of fstArr) {
    varience += (i - fstAvg)**2;
}
varience /= fstArr.length;

std = varience**0.5;

// 연습문제 2
let s = "5, 4, 10, 2, 5";
let splitS = s.split(",");
let secdSum = 0;
let secdAvg = 0;

for (let i of splitS) {
    secdSum += parseInt(i);
}
secdAvg = secdSum/splitS.length;

// 연습문제 3
let thrdArr = [11, 22, 33, 111, 2];
let thrdSum = 0;

for (let i of thrdArr) {
    let castArr = String(i);
    for (let j of castArr) {
        thrdSum += parseInt(j, 10);
    }
}