import './App.css';
import React, { useEffect, useState } from 'react';

function SyncTime() {
  const [time, setTime] = useState(new Date());
  const [hour, setHour] = useState(time.getHours());
  const [minute, setMinute] = useState(time.getMinutes());
  const [second, setSecond] = useState(time.getSeconds());

  useEffect(() => {
    console.log('시간은 흐른다.');
    let time = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
      setHour(currentTime.getHours());
      setMinute(currentTime.getMinutes());
      setSecond(currentTime.getSeconds());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [time]);

  return (
    <h1>
      {hour} 시 {minute} 분 {second} 초
    </h1>
  );
}

function App() {
  return (
    <div>
      <SyncTime />
    </div>
  );
}

export default App;
