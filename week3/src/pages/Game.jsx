import React, { useState } from 'react'
import styled from "@emotion/styled"
import GameBoard from '../components/GameBoard';

const Game = ({level, setTime}) => {
  const [targetNumber, setTargetNumber] = useState(0);
  return (
    <GameSection>
      <div>
        다음 숫자 : {targetNumber}
      </div>
      <GameBoard level={level} targetNumber={targetNumber} setTargetNumber={setTargetNumber} setTime={setTime}/>
    </GameSection>
    
  )
}

export default Game

const GameSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3vh;
`
