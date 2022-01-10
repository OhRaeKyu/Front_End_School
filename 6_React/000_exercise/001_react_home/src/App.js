import React, { useState } from "react";
import styles from "./App.module.css";

import Home from "./Pages/Home"
import Documment from "./Pages/Document"
import Study from "./Pages/Study"
import Blog from "./Pages/Blog"
import Community from "./Pages/Comunnity"
// import Header from "./Components/Header.js";
// import Main from "./Components/Main.js";

const RenderPage = (props) => {
  if (props.page === "Document") {
    return <Documment/>
  } else if (props.page === "Study") {
    return <Study/>
  } else if (props.page === "Blog") {
    return <Blog/>
  } else if (props.page === "Community") {
    return <Community/>
  } else {
    return null;
  }
};

function App() {
const [page, setPage] = useState("");
    const renderPage = (e) => {
        const movePage = e.target.innerText;
        if (movePage === "문서") {
            setPage("Document");
        } else if (movePage === "자습서") {
            setPage("Study");
        } else if (movePage === "블로그") {
            setPage("Blog");
        } else if (movePage === "커뮤니티") {
            setPage("Community");
        } else {
          setPage("");
        }
    };

    return (
        <div className='App'>
          <header className={styles.header}>
            <ul className={styles.nav}>
                <li onClick={renderPage}>React</li>
                <li onClick={renderPage}>문서</li>
                <li onClick={renderPage}>자습서</li>
                <li onClick={renderPage}>블로그</li>
                <li onClick={renderPage}>커뮤니티</li>
            </ul>
          </header>
          <main className={styles.main}>
            <RenderPage page={page} className={styles.render}/>
          </main>
        </div>
    );}

export default App;
