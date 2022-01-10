import React from "react";

const Home = ({RenderPage}) => {
    return (
        <div>
            <h1>React</h1>
            <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
            <div>
                <button type="button">시작하기</button>
                <a href="#" onClick={RenderPage}>자습서 읽어보기</a>
            </div>
        </div>
    )
}

export default Home;