import React, { useState } from "react";
import styled from "@emotion/styled";

const Card = ({ id, name, englishName, github, gender, role, firstWeekGroup, secondWeekGroup }) => {
  const [count, setCount] = useState(0); //여기에 useState의 파라미터(인자)로 들어가는 숫자가 초기값인거야

  //그럼 이제 화면 다시 돌아가볼게 버튼 눌러보면 숫자가 바뀌는지 안 바뀌는지!
  //아까는 숫자가 안 바뀌었던 거 기억하지? ㅇㅋ
  console.log(count);

  const click = () => {
    setCount(count + 1);
  };

  return (
    <CardContainer>
      <Item>{id}</Item>
      <Item>{name}</Item>
      <Item>{englishName}</Item>
      <Item>{github}</Item>
      <Item>{gender}</Item>
      <Item>{role}</Item>
      <Item>{firstWeekGroup}</Item>
      <Item>{secondWeekGroup}</Item>
      <LikeButton onClick={click}>{count}</LikeButton>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //grid 밑에서는 해당 셀에서의 크기임
  width: 100%;
  //height: 20vh;
  border: 1px solid black;
`;

const Item = styled.div``;

const LikeButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: wheat;
`;
