import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"

//아직 시간 가는거랑, 블록 없어지는 거 구현 x
const GameBoard = ({level, targetNumber, setTargetNumber, setTime}) => {


  const lineCount = (level + 2);
  const cellCount = lineCount ** 2;
  const endNumber = cellCount * 2;
  
  const [cells, setCells] = useState([]);
  const [secondCells, setSecondCells] = useState([]);
  const [flashNumber, setFlashNumber] = useState(null);

  useEffect(()=>{
    const initialCells =  Array.from({length: cellCount}, (_,i)=> i+1).sort(() => Math.random() - 0.5);
    
    setCells(initialCells);
    setSecondCells(initialCells.map((num)=> num + cellCount).sort(()=>Math.random() - 0.5));
    setTargetNumber(1);
  },[cellCount])
  

  const handleClickItem = (number, index) => {
    console.log("클릭:",number);
    console.log("타겟:",targetNumber);
    if(number === targetNumber){
      setFlashNumber(number);
      setTargetNumber((prev)=>prev+1);
      
      //애니메이션(0.2s)이 끝난 뒤에 숫자 변경
      setTimeout(()=>{
        setCells((cells)=>cells.map((number,idx)=> idx===index ? secondCells[idx] : number));
      },200);
    }
  }  

  console.log(cells, secondCells);
  return (
    <Grid $lineCount = {lineCount} >
      {cells.map((number, index)=> (
        <GridItem key={`item-${index}`} onClick={()=>handleClickItem(number, index)} className={flashNumber === number ? "flash" : ""}>
          {number}
        </GridItem>
      ))}
    </Grid>
  )
}

export default GameBoard

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ $lineCount }) => $lineCount}, 1fr);
  grid-template-rows: repeat(${({ $lineCount }) => $lineCount}, 1fr);
  gap: 10px;
`

const GridItem = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;

  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 5px;

  @keyframes flash {
    0% {
      background-color: aliceblue;
    }
    50% {
      background-color: white;
    }
    100%{
      background-color: aliceblue;
    }
  }

  &.flash{
    animation: flash 0.2s ease-in-out;
  }
`

