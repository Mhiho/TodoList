import React, {useContext} from "react"
import {ThemeContext} from './ThemeContext'
import Header from '../_components/Header'
import {Dark,Light} from '../styles/mainStyle'


const Layout = ({ children }:any) => {

  const {light} = useContext(ThemeContext)
  return (
    <>
    <Header />
    {light ? (
      <Light>
          <main>
             {children }
          </main>
      </Light>
    ) : (
    <Dark>
          <main>
             {children }
          </main>
    </Dark>
  )}
    </>
  )
  
}

export default Layout