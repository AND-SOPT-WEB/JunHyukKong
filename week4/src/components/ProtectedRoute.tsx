import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

//호출 시그니쳐 
type Operation = {
  (props : PropTypes): JSX.Element
}

type PropTypes = {
  element: React.ReactNode;
}

const ProtectedRoute: Operation = ({element}) => {
  const isLoggedIn = useAuth();

  if(!isLoggedIn){
    return <Navigate to={"/"} replace/>
  }

  return (
    <>
      {element}
    </>
  )
}

export default ProtectedRoute
