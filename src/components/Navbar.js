import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/overview">Overview</Link>
            </nav>
        </div>
    );
}

export default Navbar;