import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import OverviewPage from "../pages/OverviewPage";
import HomePage from "../pages/HomePage";
import {useState} from "react";
import Login from "./Login";

function App() {
    const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken}/>
    }
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/overview" element={<OverviewPage/>}/>
            </Routes>
        </div>
    );
}


export default App;