import styles from '../css/Home.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.appHome}>
      <h1>React</h1>
      <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
      <div className={styles['link-page']}>
        <Link to="/docs">시작하기</Link>
        <Link to="/tutorial">자습서 읽어보기</Link>
      </div>
    </div>
  );
};

export default Home;
