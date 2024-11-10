import React from 'react'
import styled from '@emotion/styled'

const MyHobby = () => {
  return (
    <HobbyLayout>
      <CategoryTitle>나의 취미</CategoryTitle>
      <CategoryText>{/*api로 받아온 나의 취미 담길 예정 */}</CategoryText>

      <CategoryTitle>다른 사람들의 취미</CategoryTitle>
      <Input placeholder='사용자 번호'/>
      <SearchButton>검색</SearchButton>
      <Notice>{"zz"/*검색 결과 담길 예정 */}</Notice>
    </HobbyLayout>
  )
}

export default MyHobby

const HobbyLayout = styled.section`
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

const CategoryText = styled.p`
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: ${({ theme }) => theme.colors.Gray_stroke};
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

const SearchButton = styled.button`
  width: 100%;
  min-height: 25%;
 
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.Sub_green};
  background-color: ${({ theme }) => theme.colors.Sub_green};
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: white;
`

const Notice = styled.p`
  ${({ theme }) => theme.fonts.title_14pt_Bold};
  color: ${({ theme }) => theme.colors.Sub_pink};
  height: 15%;
  width: 100%;
`



