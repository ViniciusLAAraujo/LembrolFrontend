import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const MainNavigation: React.FC = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </>
  )
}

export default MainNavigation
