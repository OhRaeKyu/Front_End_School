let json = "{bad json}";

// try catch : 에러 발생 처리문
try {
  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert(user.name); // 이 코드는 동작하지 않습니다.
} catch (error) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert("데이터에 에러가 있어 재요청을 시도합니다.");
  console.log(error.name);
  console.log(error.message);
}

// try catch finally : 에러 발생 처리문
try {
    console.log("try 블록 시작");
    if (confirm("에러를 만드시겠습니까?")) {
      이상한_코드();
    } 
} catch (e) {
    console.log("catch");
} finally {
    console.log("finally"); // 에러가 발생하여도 무조건 실행
}