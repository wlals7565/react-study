import React from 'react'
import { Outlet, useNavigate } from '../../node_modules/react-router-dom/dist/index'

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  } 

  const goArticles = () => {
    navigate('/articles')
  }

  return (
    <div>
      <header style={{backgroundColor: 'lightgray', padding: 16, fontSize:24}}>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout