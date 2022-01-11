import React, { useRef, useState } from 'react';

const App = () => {
  const emailInput = useRef(null);
  const pwInput = useRef(null);
  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const inputCheck = (e) => {
    // preventDefault() : 이전에 갖고 있는 이벤트 발생하지 않게함
    e.preventDefault();
    if (emailInput.current.value === '') {
      alert('이메일을 입력해주세요');
      emailInput.current.focus();
      return;
    } else if (pwInput.current.value === '') {
      alert('비밀번호를 입력해주세요');
      pwInput.current.focus();
      return;
    }
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  const scrollBox = useRef(null);

  const scrollTop = (e) => {
    e.preventDefault();
    console.log(scrollBox.current);
    scrollBox.current.scrollTop = 0;
  };

  return (
    <>
      <div
        className="container"
        ref={scrollBox}
        style={{ height: '400px', overflow: 'scroll' }}
      >
        <form
          style={{ display: 'flex', flexDirection: 'column', height: '3000px' }}
        >
          <label>
            이메일 : <input type="email" ref={emailInput} />
          </label>
          <label>
            비밀번호 : <input type="password" ref={pwInput} />
          </label>

          <button type="submit" style={{ width: '100px' }} onClick={inputCheck}>
            회원가입
          </button>
          <span>{emailValue}</span>
          <span>{pwValue}</span>
        </form>
        <button type="button" onClick={scrollTop}>
          위로
        </button>
      </div>
    </>
  );
};

export default App;
