import React, { useState } from 'react'
import MyHobby from '../../components/mypage/MyHobby';
import MyInfo from '../../components/mypage/MyInfo';
import styled from '@emotion/styled';

const MyPage = () => {
  const [isHobby, setIsHobby] = useState(true);
  return (
    <Flex>
      <Header>
        <HeaderLeft>
          <HeaderTitle>마이페이지</HeaderTitle>
          <HeaderContent onClick={()=>setIsHobby(true)}>취미</HeaderContent>
          <HeaderContent onClick={()=>setIsHobby(false)}>내 정보</HeaderContent>
        </HeaderLeft>
        <HeaderContent>로그아웃</HeaderContent>
      </Header>
      <LoginWrapper>
        <LoginTitle>{isHobby? "취미" : "내 정보 수정하기"}</LoginTitle>
        {isHobby ? <MyHobby/> : <MyInfo/>}
        
      </LoginWrapper>
    </Flex>


  )
}

export default MyPage

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 12vh;

  padding-left: 1rem;
  padding-right: 1rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.Sub_green};
`

const HeaderLeft = styled.div`
  display: flex;
  gap: 2rem;
`


const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.title_26pt_Bold};
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContent = styled.h3`
  ${({ theme }) => theme.fonts.title_18pt_Bold};
  color: ${({ theme }) => theme.colors.Black_Gra};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.colors.Primary_Black};
    text-decoration: underline;
  }
`

const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  max-width: 60rem;
  width: 60%;
  height: 100vh;

  padding: 10vw 10vh;
`;

const LoginTitle = styled.h1`
  ${({ theme }) => theme.fonts.title_26pt_Bold};
  color: ${({ theme }) => theme.colors.Primary_Black};
`

