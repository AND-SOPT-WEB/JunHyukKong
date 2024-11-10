import React from 'react'
import { Outlet } from 'react-router-dom';

//별 스타일 x (그냥 테스트 삼아 만듬)
const Layout = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Layout;
