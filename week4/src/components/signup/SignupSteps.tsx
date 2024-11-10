import React from 'react'
import NameStep from './NameStep';
import PasswordStep from './PasswordStep';
import HobbyStep from './HobbyStep';

interface FormData {
  id: string;
  password: string;
  hobby: string;
}

interface SignupProps {
  currentStep : number;
  formData : FormData;
  onChange: (field : keyof FormData, value:string) => void;
  onNext: ()=>void;
  onComplete : ()=> void;
}

const SignupSteps = ({currentStep, formData, onChange, onNext, onComplete}:SignupProps) => {
  switch(currentStep){
    case 1:
      return <NameStep onChange={onChange} onNext={onNext} value={formData.id} />;
    case 2:
      return <PasswordStep onChange={onChange} onNext={onNext} value={formData.password}/>;
    case 3:
      return <HobbyStep onChange={onChange} onComplete={onComplete} value={formData.hobby}/>;
    default:
      return null; //에러 상황
  }
  
}

export default SignupSteps
