import styled from '@emotion/styled'
import React from 'react'


const Login = () => {
  return (
    <Test>
      login
    </Test>
  )
}

export default Login


const Test = styled.article`
  width: 100px;
  color: ${({ theme }) => theme.colors.Primary_Black};
  font-size: 10px;
`;