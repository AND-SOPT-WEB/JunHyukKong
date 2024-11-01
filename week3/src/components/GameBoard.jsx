import React, { useEffect, useRef, useState } from 'react'
import styled from "@emotion/styled"

//아직 시간 가는거랑, 블록 없어지는 거 구현 x
const GameBoard = ({level, time, targetNumber, setTargetNumber, setTime}) => {


  const lineCount = (level + 2);
  const cellCount = lineCount ** 2;
  const endNumber = cellCount * 2;
  
  const [cells, setCells] = useState([]);
  const [secondCells, setSecondCells] = useState([]);
  const [flashNumber, setFlashNumber] = useState(null);

  const intervalRef = useRef(null);

  useEffect(()=>{
    initGame();
  },[cellCount])

  
  useEffect(()=>{
    //게임 시작시
    if(targetNumber >= 2){
      intervalRef.current = setInterval(()=>{
        setTime((prev)=> prev + 10);
      },10)
    }
    
    //게임 종료시
    if(targetNumber > endNumber) {
      alert("해결!");
      clearInterval(intervalRef.current);
      //시작 timestamp, level, time -> 로컬 스토리지 저장 필요
      
      const prevRecords = localStorage.getItem('records') ? JSON.parse(localStorage.getItem('records')) : null;
      if(prevRecords){
        localStorage.setItem('records', JSON.stringify([...prevRecords, 
          {
            timestamp: getCurrentTime(),
            level,
            time
          }
        ]));
      } else{
        localStorage.setItem('records', JSON.stringify([
          {
            timestamp: getCurrentTime(),
            level,
            time
          }
        ]));
      }

      initGame();
    }

    //clean-up 함수 자체를 반환
    return ()=>clearInterval(intervalRef.current);
  },[targetNumber])


  const initGame = () => {
    const initialCells =  Array.from({length: cellCount}, (_,i)=> i+1).sort(() => Math.random() - 0.5);
    const initialSecondCells = initialCells.map((num)=> num + cellCount).sort(()=>Math.random() - 0.5);

    console.log("이니셜:",initialCells);
    console.log("이니셜2:",initialSecondCells);
    setCells(initialCells);
    setSecondCells(initialSecondCells);
    setTargetNumber(1);
    setFlashNumber(null);
    setTime(0);
  }
  

  const getCurrentTime = () => {
    const currentTime = new Date();
    const year = String(currentTime.getFullYear()).padStart(2,'0');
    const month = String(currentTime.getMonth()+1).padStart(2,'0');
    const date = String(currentTime.getDate()).padStart(2,'0'); 

    const hour = currentTime.getHours();
    const period = hour >=12 ? "오후" : "오전";
    
    const minute = String(currentTime.getMinutes()).padStart(2,'0');
    const second = String(currentTime.getSeconds()).padStart(2,'0');

    return `${year}. ${month}. ${date} ${period} ${String(hour % 12).padStart(2,'0')}:${minute}:${second}`;
  }

  const handleClickItem = (number, index) => {
    if(number === targetNumber){
      setFlashNumber(number);
      setTargetNumber((prev)=>prev+1);
      
      //애니메이션(0.5s)이 끝난 뒤에 숫자 변경
      setTimeout(()=>{
        setCells((cells)=>cells.map((number,idx)=> idx===index ? secondCells[idx] : number));
      },500);
    }
  }  

  // console.log(cells, secondCells);
  //2가지 문제 발생
  /*
    1. 다시 게임 시작하려고 할 때, 배경이 안 돌아옴
    2. 숫자가 제멋대로임 (1~9가 아님)
  */
  return (
    <Grid $lineCount = {lineCount} >
      {cells.map((number, index)=> (
        <GridItem 
          key={`${index}`} 
          onClick={(e)=>{
            if(Number(e.target.textContent) > cellCount && Number(e.target.textContent)=== targetNumber){
              e.target.textContent = "";
              e.target.style.backgroundColor = "inherit"; //css-in-js라서 기본 style에서는 없음
            } 
            handleClickItem(number, index);
          }} 
          className={flashNumber === number ? "flash" : ""}>
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
  background-color: pink;

  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 5px;

  @keyframes flash {
    0% {
      background-color: pink;
    }
    50% {
      background-color: white;
    }
    100%{
      background-color: pink;
    }
  }

  &.flash{
    animation: flash 0.5s ease-in-out;
  }
`

