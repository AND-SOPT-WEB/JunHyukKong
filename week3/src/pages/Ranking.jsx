import React from 'react'
import styled from "@emotion/styled"

const Ranking = ({formattedTime}) => {
  const records = JSON.parse(localStorage.getItem('records') || []); //단락 평가 
  records.sort((a,b)=> {
    if(a.level === b.level){
      return a.time - b.time;
    }else{
      return b.level - a.level;
    }
  });
  return (
    <RankingContainer>
      <div style={{display:"flex", width:"100%",flexDirection:"row", justifyContent:"center",position:"relative"}}>
        <RankingTitle>랭킹</RankingTitle>
        <ResetButton>🤍초기화</ResetButton>
      </div>
      
      <RankingTable>
        <RankingHeader>
          <tr>
            <th style={{textAlign:"center", border: "1px solid black"}}>타임스탬프</th>
            <th style={{textAlign:"center", border: "1px solid black"}}>레벨</th>
            <th style={{textAlign:"center", border: "1px solid black"}}>플레이 시간</th>
          </tr>
        </RankingHeader>
        <RankingBody>
          {records.map((record,index) => (
            <tr key={`record-${index}`}>
              <td style={{textAlign:"center", border: "1px solid black"}}>{record.timestamp}</td>
              <td style={{textAlign:"center", border: "1px solid black"}}>{`Level${record.level}`}</td>
              <td style={{textAlign:"center", border: "1px solid black"}}>{formattedTime(record.time)}</td>
            </tr>
          ))}
        </RankingBody>
      </RankingTable>
    </RankingContainer>
  )
}

export default Ranking

const RankingContainer = styled.section`
  width: 500px;
  min-height: 50px;
  max-height: 500px;
  overflow-y: scroll;
  background-color: aliceblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RankingTitle = styled.h1`
  
`;

const ResetButton = styled.button`
  width: 90px;
  height: 30px;
  border: 1px solid black;
  white-space: nowrap;

  position: absolute;
  top: 5px;
  right: 10px;

  background-color: #58a3e4;
  color: white;
`

const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse; 
`;

const RankingHeader = styled.thead`
  width: 100px;
  height: 50px;
  background-color: #7575e4;
`

const RankingBody = styled.tbody`
  width: 100px;
  height: 60px;
`
