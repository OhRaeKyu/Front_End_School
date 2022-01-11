import styles from './App.module.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Pages/Home';
import Docs from './Pages/Docs';
import Tutorial from './Pages/Tutorial';
import Blog from './Pages/Blog';
import Community from './Pages/Comunnity';
// import Header from "./Components/Header.js";
// import Main from "./Components/Main.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className={styles.header}>
          <div className={styles.nav}>
            <Link to="">React</Link>
            <Link to="/docs">문서</Link>
            <Link to="/tutorial">자습서</Link>
            <Link to="/blog">블로그</Link>
            <Link to="/community">커뮤니티</Link>
          </div>
        </header>
        <main className={styles.main}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/docs" exact component={Docs}></Route>
            <Route path="/tutorial" exact component={Tutorial}></Route>
            <Route path="/blog" exact component={Blog}></Route>
            <Route path="/community" exact component={Community}></Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
