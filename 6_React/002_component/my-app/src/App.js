import './App.css';
import React, { Fragment } from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Product from './Components/Product.js';
import Footer from './Components/Footer.js';

function Resume(props) {
  return (
    <div>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>음식 : {props.food}</h2>
      {/* <h2>색상 : <span style= {color: {props.color}}>{props.color}</span></h2> */}
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Product />
      <Footer />
      <Resume name="래규" hello="Hello world" hobby="운동" food="단백질" color="red"/>
    </div>
  )
}


export default App;