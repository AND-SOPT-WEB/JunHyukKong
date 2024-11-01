import { useState } from 'react'
import Header from './components/Header'
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import styled from "@emotion/styled"


function App() {
  const [mode, setMode] = useState("game");
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0); //ms 단위 (1000ms -> 1s)

  //시작 timestamp, level(숫자), time(숫자) -> 로컬 스토리지 저장 필요
  const [records, setRecords]= useState(JSON.parse(localStorage.getItem('records')));

  const formattedTime = (time) => {
    const second = String(Math.floor((time / 1000) % 60));
    const millisecond = String(Math.floor((time % 1000)/10));
    return `${second.padStart(2,'0')}.${millisecond.padStart(2,'0')}`;
  }

  return (
    <>
    <Header mode={mode} setMode={setMode} setLevel={setLevel} time={formattedTime(time)}/>
    <Body>
      {
        mode === "game" ? <Game level={level} time={time} setTime={setTime}/> : <Ranking/>
      }
    </Body>
    
    </>
  )
}

export default App

const Body = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 80vh;
  margin-top: 20vh;
  background-color: antiquewhite;
`