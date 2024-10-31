import { useState } from 'react'
import Header from './components/Header'
import Game from './components/Game';
import Ranking from './components/Ranking';
import styled from "@emotion/styled"


function App() {
  const [mode, setMode] = useState("game");
  const [level, setLevel] = useState("level");
  const [time, setTime] = useState(0);

  return (
    <>
    <Header mode={mode} setMode={setMode} setLevel={setLevel} time={setTime}/>
    <Body>
      {
        mode === "game" ? <Game/> : <Ranking/>
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