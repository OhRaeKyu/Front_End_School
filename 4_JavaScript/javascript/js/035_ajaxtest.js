// 1. 회원 데이터는 (각 개인) github에 있음
// 2. prompt로 id와 pw를 입력
// 3. 로그인 성공시 - 로그인 성공 문자 출력
//    3.1  출력 문자열 : 누구누구님 환영합니다. 
//                   멋사코인 100억원, 등급 다이아몬드 
//    3.2 100억이라는 필드가 없네요. 전화번호 뒷자리에 억원을 붙이기로 합시다. 010-1234-1235면 1235억원 가지고 있는 것으로 출력해주세요.
// 4. 로그인 실패시 - 로그인 실패 문자 출력
// 5. (선택사항) prompt를 input으로 바꿔서 사용자에게 html 상에서 입력받게 해주세요.
// 6. (선택사항) 실력이 되시는 분들은 로그인 성공 페이지와, 로그인 실패 페이지를 별도로 설계합니다.

var loginUser;

$("#btnLogin").click(function() {
    let inputId = document.querySelector("#inpId").value;
    let inputPw = document.querySelector("#inpPw").value;
    $.ajax({
        url: "https://raw.githubusercontent.com/OhRaeKyu/ajaxlogintest/main/userdata.json",
        async: true,
        success: function(result) {
            loginUser = JSON.parse(result).find(i => i["id"] === inputId);
    
            if (loginUser) {
                $("#appLogin").css("display", "none");
                $("#loginSuccess").css("display", "flex");
                $(".successField").html(`
                ${loginUser["id"]}님 환영합니다.<br>
                멋사코인 ${loginUser["phone"].split("-")[1]}억원, 등급 ${loginUser["grade"]}.
                `);
            }
            else {
                $("#appLogin").css("display", "none");
                $("#loginFailure").css("display", "flex");
                $(".failureField").html("로그인 실패");
            }
        }
    });
});

// $("#btnReLogin").click(function() {
//     // $("#loginSuccess").css("display", "none");
//     $("#loginFailure").css("display", "none");
//     $("#appLogin").css("display", "flex");
// });