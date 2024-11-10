import React, { useState } from 'react'
import styled from '@emotion/styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


interface FormData {
  id: string;
  password: string;
  hobby: string;
}

interface PasswordStepProps {
  onChange: (field : keyof FormData, value:string) => void;
  onNext: ()=>void;
  value : string;
}

const PasswordStep  = ({onChange, onNext, value} : PasswordStepProps) => {
  const [passwordCopy, setPasswordCopy] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();


  const handleTogglePassword = () => {
    setIsVisible((prev)=>!prev);
  }
  return (
    <PasswordLayout>
      <PasswordTitle>비밀번호</PasswordTitle>
      <InputWrapper>
        <InputBox >
          <PasswordInput type={isVisible? 'text':'password'} placeholder='비밀번호를 입력해주세요' value={value} onChange={(e)=>onChange('password', e.target.value)}/>
          <button onClick={ handleTogglePassword}>
            {isVisible ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
          </button>
        </InputBox>
        <Input type={'password'} placeholder='비밀번호를 확인' value={passwordCopy} onChange={(e)=>setPasswordCopy(e.target.value)}/>
      </InputWrapper>
      <div>
        {value.length > 8 && <InputNotice>비밀번호는 8자 이하로 입력해주세요</InputNotice>}
        {passwordCopy.length > 0 && value !== passwordCopy && <InputNotice>비밀번호가 일치하지 않습니다</InputNotice>}
      </div>
      
      <NextButton disabled={value.length <= 0 || value.length > 8 || value !== passwordCopy} onClick={onNext}>다음</NextButton>
      <SignUpText>이미 회원이신가요? &nbsp;<span onClick={()=>navigate("/")}>로그인</span></SignUpText>
    </PasswordLayout>
  )
}

export default PasswordStep

const PasswordLayout = styled.section`
  width: 100%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const PasswordTitle = styled.h1`
  ${({ theme }) => theme.fonts.title_18pt_Bold};
  color: ${({ theme }) => theme.colors.Black_Gra};
`

const InputWrapper = styled.div`
  width: 100%;
  min-height: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
  gap: 1rem;
`


const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  min-height: 85%;

  border-radius: 5px;
  border: 1px solid gray;
`

const PasswordInput = styled.input`
  width: 100%;
  min-height: 85%;
  
  ${({ theme }) => theme.fonts.sub_12pt};
  color: ${({ theme }) => theme.colors.Black_Gra};
  &::placeholder{
    color: gray;
  };
`

const Input = styled.input`
    width: 100%;
    min-height: 85%;
    
    border-radius: 5px;
    border: 1px solid gray;
    
    ${({ theme }) => theme.fonts.sub_12pt};
    color: ${({ theme }) => theme.colors.Black_Gra};
    &::placeholder{
      color: gray;
    };
`;

const InputNotice = styled.p`
  ${({ theme }) => theme.fonts.sub_10pt_bold};
  color: ${({ theme }) => theme.colors.Tertiary_red};
  height: 15%;
  width: 100%;

`

const NextButton = styled.button`
  width: 100%;
  min-height: 25%;
 
  border-radius: 5px;
  border: 1px solid #db6a6a;
  background-color: #db6a6a;
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: wheat;

  &:hover {
    background-color: #b55757; /* hover 시 바뀔 배경색 */
  };
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #d3d3d3; 
    border: 1px solid #a0a0a0; 
    color: #a0a0a0; 
    cursor: not-allowed; 
  }
  
`

const SignUpText = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  
  color: gray;
  ${({ theme }) => theme.fonts.sub_12pt_bold};
  height: 25%;

  span{
    text-decoration: underline;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.Sub_pink};
  }
`