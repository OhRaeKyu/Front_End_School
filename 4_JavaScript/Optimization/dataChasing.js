const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// 좋지 않은 코드 (기존 데이터를 변형하는 코드)
// aespa.forEach((item, index) => {
//     aespa[index] = item + "⭐️";
// });

const aespa2 = aespa.map(item => item + "⭐️");

console.log(aespa);
console.log(aespa2);