import React, {useContext,useState} from "react"
import {ThemeContext} from '../hoc/ThemeContext'

const Header = () => {
    const {light, setLight} = useContext(ThemeContext)
    const toggleTheme = () => {
        setLight(!light)
    }

    return(
        <div>
        {light ? (<button onClick={toggleTheme}>☽</button>) : (<button onClick={toggleTheme}>☀</button>)}
        </div>
    )
}
export default Header