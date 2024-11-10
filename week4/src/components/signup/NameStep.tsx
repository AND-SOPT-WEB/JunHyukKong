import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';

interface FormData {
  id: string;
  password: string;
  hobby: string;
}

interface NameStepProps {
  onChange: (field : keyof FormData, value:string) => void;
  onNext: ()=>void;
  value : string;
}
//참고: &nbsp; 는 줄바꿈을 일으키지 않는 공백이다.
const NameStep = ({onChange, onNext, value} : NameStepProps) => {
  const navigate = useNavigate();
  return (
    <NameLayout>
      <NameTitle>이름</NameTitle>
      <InputWrapper>
        <Input placeholder='사용자 이름을 입력해주세요' value={value} onChange={(e)=>onChange('id', e.target.value)}/>
        {value.length > 8 && <InputNotice>이름은 8자 이하로 입력해주세요</InputNotice>}
      </InputWrapper>
      <NextButton disabled={value.length <= 0 || value.length > 8} onClick={onNext}>다음</NextButton>
      <SignUpText>이미 회원이신가요? &nbsp;<span onClick={()=>navigate("/")}>로그인</span></SignUpText>
    </NameLayout>
  )
}

export default NameStep

const NameLayout = styled.section`
  width: 100%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const NameTitle = styled.h1`
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