import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { verifiedInstance } from '../../apis/axios'

const MyHobby = () => {
  const [no, setNo] = useState<number|null>(null);
  const [hobby, setHobby] = useState("");
  const [otherHobby, setOtherHobby] = useState("");

  const getUserHobby = async() => {
    try{
      const response = await verifiedInstance.get("/user/my-hobby");
      return response.data.result.hobby;
    }catch(e){
      console.log(e);
    }
  }

  const getOtherUserHobby = async() => {
    try{
      const response = await verifiedInstance.get(`/user/${no}/hobby`);
      setOtherHobby(response.data.result.hobby);
      return response.data.result.hobby;
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    const fetch = async() => {
      const hobby = await getUserHobby();
      setHobby(hobby);
    }
    fetch();
  },[])

  return (
    <HobbyLayout>
      <CategoryTitle>나의 취미</CategoryTitle>
      <CategoryText>{hobby}</CategoryText>

      <CategoryTitle>다른 사람들의 취미</CategoryTitle>
      <Input type='number' placeholder='사용자 번호' value={no || ""} onChange={(e)=>setNo(Number(e.target.value))}/>
      <SearchButton onClick={()=>getOtherUserHobby()}>검색</SearchButton>
      <Notice>{`${no}번 사용자의 취미: ${otherHobby}`}</Notice>
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



