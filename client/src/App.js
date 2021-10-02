import "./App.css";
import React, {
    useState,
    useEffect,
    createContext,
    useReducer,
    useContext,
} from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { reducer, initialState } from "./store/reducer";
import Front from "./components/LoginSignup/LoginSignup";

export const UserContext = createContext();

const Routing = () => {
    const [theme, setTheme] = useState(true);
    const history = useHistory();
    // console.log('theme:', theme)
    const handleTheme = () => {
        setTheme(!theme);
    };

    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({ type: "USER", payload: user });
        } else {
            history.push("/register");
        }
    }, []);

    return (
        <div
            className="App"
            styles={!theme ? { color: "#fff", background: "black" } : ""}>
            <Switch>
                <Route exact path="/">
                    <Navbar handleTheme={handleTheme} />
                    <Main />
                </Route>
                <Route exact path="/register">
                    <Front />
                </Route>
                <Route exact path="/profile">
                    <Navbar handleTheme={handleTheme} />
                    <Profile />
                </Route>
            </Switch>
        </div>
    );
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
