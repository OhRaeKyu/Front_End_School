// while
let num = 0;
let result = 0;
while (num <= 100){
    console.log(num);
    result += num;
    num += 2;
}
document.write(result, "<br>");

// do while
num = 0;
result = 0;
do {
    console.log(num);
    result += num;
    num += 2;
} while (num <= 100);
document.write(result, "<br>");

// 구구단
let i = 2;
while (i <= 9){
    let j = 1;
    while (j <= 9) {
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    i++;
}

// break & continue
num = 0;
while (num < 11) {
    console.log(num);
    if (num == 5) {
        break;
        // continue;
    }
    num++;
}