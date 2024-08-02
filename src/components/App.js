import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import OverviewPage from "../pages/OverviewPage";
import HomePage from "../pages/HomePage";

function App() {
    console.log('Rendering App component');
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