import React from 'react';
import "../styles/Login.css";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

async function loginUser(creds) {
    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch:', error);
        throw error;
    }
}

function Login({ setToken }) {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const navigate = useNavigate();

    const handleSubmit = async (submit) => {
        submit.preventDefault();
        try {
            const token = await loginUser({
                email,
                password
            });
            setToken(token);
            navigate("/"); // Navigate to the home page upon successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <div className="loginform">
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>:
                    <input type="text" onChange={submit => setEmail(submit.target.value)} />
                </label>
                <label>
                    <p>Password</p>:
                    <input type="password" onChange={submit => setPassword(submit.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;