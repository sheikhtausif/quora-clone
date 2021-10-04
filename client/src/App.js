import "./App.css";
import React from "react";
import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Front from "./components/LoginSignup";
import Following from "./components/Following";
import Answer from "./components/Answer";
import Spaces from "./components/Spaces";
import Notifications from "./components/Notifications";


const App = () => {
    const [theme, setTheme] = useState(true);
    const history = useHistory();
    console.log('history:', history)
    // console.log('theme:', theme)
    const handleTheme = () => {
        setTheme(!theme);
    };

    return (
        <div
            className="App"
            styles={!theme ? { color: "#fff", background: "black" } : ""}>
            <Switch>
                <Route exact path="/register">
                    <Front />
                </Route>
                <Route exact path="/">
                    <Navbar handleTheme={handleTheme} />
                    <Main />
                </Route>
                <Route exact path="/profile">
                    <Navbar handleTheme={handleTheme} />
                    <Profile />
                </Route>
                <Route exact path="/following">
                    <Navbar handleTheme={handleTheme} />
                    <Following />
                </Route>
                <Route exact path="/answer">
                    <Navbar handleTheme={handleTheme} />
                    <Answer />
                </Route>
                <Route exact path="/spaces">
                    <Navbar handleTheme={handleTheme} />
                    <Spaces />
                </Route>
                <Route exact path="/notifications">
                    <Navbar handleTheme={handleTheme} />
                    <Notifications />
                </Route>
            </Switch>
        </div>
    );
}

export default App