import React, { useState } from "react";

function Header() {
    const [page, setPage] = useState("Home");
    const renderPage = (e) => {
        const movePage = e.target.innerText;
        if (movePage === "문서") {
            setPage("Document");
        } else if (movePage === "자습서") {
            setPage("Study");
        } else if (movePage === "블로그") {
            setPage("Blog");
        } else {
            setPage("Community");
        }
    };

    return (
        <div>
            <a href="/">React</a>
            <ul>
                <li onClick={renderPage}>문서</li>
                <li onClick={renderPage}>자습서</li>
                <li onClick={renderPage}>블로그</li>
                <li onClick={renderPage}>커뮤니티</li>
            </ul>
        </div>
    );
}

export default Header;