import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import Front from './components/LoginSignup/LoginSignup';
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
            
            <Switch>
                <Route exact path='/'>
                <Navbar handleTheme={handleTheme} />
                    <Main />
                </Route>
                <Route exact path='/register'>
                    <Front/>
                </Route>
                <Route exact path='/profile'>
                <Navbar handleTheme={handleTheme} />
                    <Profile/>
                </Route>
            </Switch>
        </div>

        
       


       
    )
}

export default App

