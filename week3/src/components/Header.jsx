import React from 'react'
import styled from '@emotion/styled'

const Header = ({setMode, setLevel, time = 0}) => {
  return (
    <HeaderContainer>
      <div style={{"display": "flex", "gap": "10px","margin-left": "30px"}}>
        <Title>1 to 50</Title>
        <ModeButton>게임</ModeButton>
        <ModeButton>랭킹</ModeButton>
      </div>

      <div style={{"display": "flex", "gap": "10px","margin-right": "60px"}}>
        <LevelSelect>
          <LevelOption value="1">Level 1</LevelOption>
          <LevelOption value="2">Level 2</LevelOption>
          <LevelOption value="3">Level 3</LevelOption>
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
    background-color: rgba(255, 0, 0,0.5);
  }
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
