import React from 'react'
import { Navigate } from '../../../node_modules/react-router-dom/dist/index';

const Mypage = () => {
  const isLoggedIn = false;

  if(!isLoggedIn) {
    return <Navigate to="/login" replace={true} />
  }

  return (
    <div>My page</div>
  )
}

export default Mypage