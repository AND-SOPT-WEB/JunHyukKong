import React from 'react'
import styled from '@emotion/styled'
import {css} from "@emotion/react"


const Header = ({mode, setMode, setLevel, time}) => {
  const setModeGame = () => {
    setMode("game");
  }

  const setModeRanking = () => {
    setMode("ranking");
  }

  const handleLevelChange = (event) => {
    setLevel(Number(event.target.value)); 
  };

  return (
    <HeaderContainer>
      <div style={{"display": "flex", "gap": "10px","marginLeft": "30px"}}>
        <Title>1 to 50</Title>
        <ModeButton $isSelected={mode ==="game"} onClick={setModeGame}>게임</ModeButton>
        <ModeButton $isSelected={mode ==="ranking"} onClick={setModeRanking}>랭킹</ModeButton>
      </div>

      <div style={{"display": "flex", "gap": "10px","marginRight": "60px"}}>
        <LevelSelect onChange={handleLevelChange}>
          <LevelOption value={1}>Level 1</LevelOption>
          <LevelOption value={2}>Level 2</LevelOption>
          <LevelOption value={3}>Level 3</LevelOption>
        </LevelSelect>
        <div>
          {time}
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  width: 100vw;
  height: 20vh;
  background-color: aliceblue;

`

const Title = styled.h1`
  margin-right: 10px;
`;

const ModeButton = styled.button`
  cursor: pointer;
  width: 10vw;
  height: 10vh;
  border-radius: 50%;

  border: 1px solid pink;
  background-color: none;
  &:hover{
    background-color: rgba(255, 0, 0,0.2);
  }

  ${({$isSelected}) => $isSelected && css`
    background-color: rgba(255, 0, 0,0.5);
  `}
`

const LevelSelect = styled.select`
  cursor: pointer;
  width: 5vw;
  height: 5vh;
  border-radius: 10px;

  border: 1px solid pink;
  background-color: none;
  &:hover{
    background-color: rgba(255, 0, 0,0.5);
  }
`

const LevelOption = styled.option`
  background-color: aliceblue;
  
`
