// String
let n = 12345;
let s = "abcdefABCDEF";

// number를 string으로 형변환
let numStr = n.toString();
console.log(numStr);

console.log(s.slice(6));        // index 6 부터 끝까지
console.log(s.slice(6, 9));     // index 6 이상 9 미만 까지

console.log(s.substr(6, 3));    // index 6 부터 3개

s = s.replace("ABC", "RaeKyu");
console.log(s);    // ABC를 RaeKyu로 대체
console.log(s.indexOf("Rae"));