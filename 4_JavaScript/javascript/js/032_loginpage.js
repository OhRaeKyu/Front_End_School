class GetUserData {
    login(inputId, inputPw, loginSuccess, loginFailure) {
        const data = userDB.find(user => (user.id === inputId) && (user.pw === inputPw));
        if (data) {
            loginSuccess(inputID);
        }
        else {
            loginFailure(new Error("로그인 실패"));
        }
    }

    getUserDataSet(userId, loginSuccess, loginFailure) {
        const data = userDB.find(user => user.id === userId);
        if (data) {
            getdataSuccess({
                id: data.id,
                picture: data.picture,
                name: data.name,
                company: data.company,
                grade: data.grade
            });
        }
        else {
            getdataFailure(new Error("데이터 얻어오기 실패"));
        }
    }
}

const userData = new GetUserData();
const id = "dhforb";
const pw = "1234";
userData.login(id, pw, () => {}, () => {})