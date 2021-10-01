import React from 'react'
import { useState } from 'react'
import './App.css';

import Main from './components/Main';

import Navbar from './components/Navbar';

const App = () => {
    const [theme, setTheme] = useState(true)
    // console.log('theme:', theme)

    const handleTheme = () => {
        setTheme(!theme)
    }
    return (

        <div className="App" styles={!theme ? { color: "#fff", background: "black" } : ""}>
            <Navbar handleTheme={handleTheme} />
            <Main />
        </div >
    )
}

export default App

