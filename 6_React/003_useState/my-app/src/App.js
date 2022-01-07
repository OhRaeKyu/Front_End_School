import './App.css';
import React from "react"
import Resume from "./Components/Resume.js"

function App() {
  return (
    <div className="App">
      <Resume hello="안녕하세요" name="래규" hobby="운동" food="단백질" color="red"/>
    </div>
  );
}

export default App;
