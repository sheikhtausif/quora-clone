import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Main from './components/Main';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
    const [theme, setTheme] = useState(true)
    // console.log('theme:', theme)

    const handleTheme = () => {
        setTheme(!theme)
    }
    return (

        <div className="App" styles={!theme ? { color: "#fff", background: "black" } : ""}>
            <Navbar handleTheme={handleTheme} />
            <Switch>
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route exact path='/profile'>
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
}

export default App

