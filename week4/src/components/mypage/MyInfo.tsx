import React from 'react'
import styled from '@emotion/styled'

const MyInfo = () => {
  return (
    <InfoLayout>
      <CategoryTitle>새 비밀번호</CategoryTitle>
      <Input placeholder='새 비밀번호를 입력하세요'/>
      <CategoryTitle>새 취미</CategoryTitle>
      <Input placeholder='새 취미를 입력하세요'/>
      <FixButton>수정하기</FixButton>
    </InfoLayout>
  )
}

export default MyInfo

const InfoLayout = styled.section`
  width: 100%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const CategoryTitle = styled.h1`
  ${({ theme }) => theme.fonts.title_18pt_Bold};
  color: ${({ theme }) => theme.colors.Black_Gra};
`

const Input = styled.input`
    width: 100%;
    min-height: 25%;
    
    border-radius: 5px;
    border: 1px solid gray;
    
    ${({ theme }) => theme.fonts.sub_12pt};
    color: ${({ theme }) => theme.colors.Black_Gra};
    &::placeholder{
      color: gray;
    };
`;

const FixButton = styled.button`
   width: 100%;
  min-height: 25%;
 
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.Sub_green};
  background-color: ${({ theme }) => theme.colors.Sub_green};
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: white;
`

