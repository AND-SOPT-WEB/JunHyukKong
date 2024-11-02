import React from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'

const Modal = ({onClose, children}) => {
  //기본적으로 모달 컨텐트를 제외한 부분 누르면 닫히도록 구현
  return createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e)=> e.stopPropagation()}>
        {children}
        <button style={{border: "1px solid black"}} onClick={onClose}>닫기</button>
      </ModalContent>
    </Overlay>, 
    document.body
  )
}

export default Modal

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 80%;
`;