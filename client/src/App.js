import React from 'react'
import { useState } from 'react'
import './App.css';
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
        </div >
    )
}

export default App

