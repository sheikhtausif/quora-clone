import { Switch,Route } from 'react-router-dom';
import React from 'react'
import { useState } from 'react'
import './App.css';
import Front from './components/LoginSignup/LoginSignup';

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
            
            <Switch>
                <Route exact path='/'>
                <Navbar handleTheme={handleTheme} />
                    <Main />
                </Route>
                <Route exact path='/register'>
                    <Front/>
                </Route>
            </Switch>
        </div>

        
       

    )
}

export default App

