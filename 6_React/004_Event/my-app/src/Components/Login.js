import React, {useState} from "react"

function Login() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const LoginSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        window.alert(`id : ${userId}, pw : ${userPw}`);
    }

    const idInput = (e) => {
        setUserId(e.target.value);
    }

    const pwInput = (e) => {
        setUserPw(e.target.value);
    }

    return (
        <div>
            <form>
                <label>
                    아이디 : 
                    <input type="text" placeholder="아이디를 입력세요." onChange={idInput}></input>
                </label>
                <label>
                    비밀번호 : 
                    <input type="password" placeholder="비밀번호를 입력세요." onChange={pwInput}></input>
                </label>
                <button type="submit" onSubmit={LoginSubmit}>로그인</button>
            </form>
        </div>
    );
}

export default Login