import '../styles/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import OverviewPage from "../pages/OverviewPage";
import HomePage from "../pages/HomePage";
import { useEffect, useState } from "react";
import Login from "./Login";

function App() {
    const [token, setTokenState] = useState(getToken());
    const navigate = useNavigate();

    useEffect(() => {
        const token = getToken();
        if (token) {
            setTokenState(token);
            navigate("/");
        }
    }, [navigate]);

    const setToken = (userToken) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setTokenState(userToken);
    };

    if (token == null) {
        // console.log('Token:', token);
        return <Login setToken={setToken} />;
    }
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/overview" element={<OverviewPage />} />
            </Routes>
        </div>
    );
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    return JSON.parse(tokenString);
}

export default App;