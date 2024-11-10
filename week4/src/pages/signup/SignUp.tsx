import React, { useState } from 'react'
import styled from '@emotion/styled'
import SignupSteps from '../../components/signup/SignupSteps';
import { useNavigate } from 'react-router-dom';
import instance from '../../apis/axios';
import axios from 'axios';

type handleChangeType = (field: string, value: string) => void;


const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({id: '', password: '', hobby: ''});
  const navigate = useNavigate();

  const handleChange : handleChangeType = (field, value) => {
    setFormData((prev) => ({...prev, [field]: value}));
  }

  const handleNext = () => {
    if(step < 3) setStep((prev)=>prev+1);
  }

  const signupRequest = async() => {
    try{
      const response = await instance.post("/user", {
        username: formData.id,
        password: formData.password,
        hobby: formData.hobby,
      });
      return response.data.result.no;

    }catch(e){
      console.log(e);
      throw new Error("회원가입에 실패했습니다.");
    }
  }

  const handleComplete = async() => {
    //여기서 api 요청 쏘고, 응답 받아와야함 (try, catch 필요) 
    try{
      const no = await signupRequest();
      console.log(no);
      alert(`회원가입 성공! 회원 번호 : ${no}`);
      navigate("/");
    }catch(error){
      alert(error.message);
      // if(axios.isAxiosError(error)){
      //   alert(error.message);
      // }else{
      //   alert("회원가입 실패용");
      // }
    }    
  }

  return (
    <Flex>
      <SignUpWrapper>
        <SignupTitle>회원가입</SignupTitle>
        <SignupSteps currentStep={step} formData={formData} onChange={handleChange} onNext={handleNext} onComplete= {()=>handleComplete()}/>
      </SignUpWrapper>
    </Flex>
  )
}

export default SignUp

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`

const SignUpWrapper = styled.main`
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

const SignupTitle = styled.h1`
  ${({ theme }) => theme.fonts.title_26pt_Bold};
  color: ${({ theme }) => theme.colors.Primary_Black};
`

