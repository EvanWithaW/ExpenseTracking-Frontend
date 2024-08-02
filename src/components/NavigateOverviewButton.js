import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigateOverviewButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Navigating to /overview');
        navigate('/overview');
    };

    return (
        <button onClick={handleClick}>
            Go to Overview
        </button>
    );
}

export default NavigateOverviewButton;