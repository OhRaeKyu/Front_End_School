import React, { useState } from "react";

const Greeting = () => {
  const [message, setMessage] = useState("여기를 주목하세요");

  const onMouseEnter = () => {
    setMessage("안녕하세요!");
  };

  const onMouseLeave = () => {
    setMessage("안녕히가세요!");
  };

  return (
  <div>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        여기에 마우스를 올려보세요!
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Greeting;