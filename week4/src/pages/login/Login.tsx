import styled from '@emotion/styled'
import React from 'react'


const Login = () => {
  return (
    <Flex>
      <LoginWrapper>
        <LoginTitle>로그인</LoginTitle>
        <LoginLayout>
          <Input placeholder='아이디'/>
          <Input placeholder='비밀번호'/>
          <LoginButton>로그인</LoginButton>
          <SignUpText>회원가입</SignUpText>
        </LoginLayout>
      </LoginWrapper>
    </Flex>
    
  )
}

export default Login


const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
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

const LoginLayout = styled.section`
  width: 100%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`


const Input = styled.input`
    width: 100%;
    height: 25%;
    
    border-radius: 5px;
    border: 1px solid gray;
    
    ${({ theme }) => theme.fonts.sub_12pt};
    color: ${({ theme }) => theme.colors.Black_Gra};
    &::placeholder{
      color: gray;
    };
`;

const LoginButton = styled.button`
  width: 100%;
  height: 25%;
 
  border-radius: 5px;
  border: 1px solid #db6a6a;
  background-color: #db6a6a;
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: wheat;

  &:hover {
    background-color: #b55757; /* hover 시 바뀔 배경색 */
  };
  transition: background-color 0.3s ease;
`

const SignUpText = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  text-decoration: underline;
  cursor: pointer;
  color: gray;
  ${({ theme }) => theme.fonts.sub_12pt_bold};
  height: 25%;
`
