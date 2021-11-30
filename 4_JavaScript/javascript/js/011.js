// 연습문제 1
let lst_1 = [10, 20, 30, 10, 20, 30, 40, 10];
let sum_1 = 0;
let avg_1 = 0;
let varience = 0;
let std = 0;

for (let i = 0; i < lst_1.length; i++) {
    sum_1 += lst_1[i];
}
avg_1 = sum_1/lst_1.length;

for (let i = 0; i < lst_1.length; i++) {
    varience += (lst_1[i]-avg_1)**2;
}
varience /= lst_1.length;

std = varience**0.5;

// 연습문제 2
let s = "5, 4, 10, 2, 5";
let split_s = s.split(",");
let sum_2 = 0;
let avg_2 = 0;

for (let i = 0; i < split_s.length; i++) {
    sum_2 += +split_s[i];
}
avg_2 = sum_2/split_s.length;

// 연습문제 3
let lst_3 = [11, 22, 33, 111, 2];
let sum_3 = 0;
for (let i = 0; i < lst_3.length; i++) {
    lst_3[i] += "";
    for (let j = 0; j < lst_3[i].length; j++){
        sum_3 += +lst_3[i][j];
    }
}