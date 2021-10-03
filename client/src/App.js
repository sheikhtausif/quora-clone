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
import Front from "./components/LoginSignup";
import Following from "./components/Following";
import Answer from "./components/Answer";
import Spaces from "./components/Spaces";
import Notifications from "./components/Notifications";

export const UserContext = createContext();

const Routing = () => {
    const [theme, setTheme] = useState(true);
    const history = useHistory();
    // console.log('theme:', theme)
    const handleTheme = () => {
        setTheme(!theme);
    };

    // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({ type: "USER", payload: user });
        } else {
            history.push("/register");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className="App"
            styles={!theme ? { color: "#fff", background: "black" } : ""}
        >
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
