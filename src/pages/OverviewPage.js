import React, {useEffect, useState} from 'react';
import '../styles/OverviewPage.css';

function OverviewPage() {
    const [fullName, setFullName] = useState('');
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const getFullName = async () => {
            const tokenStorage = sessionStorage.getItem('token');
            if (tokenStorage) {
                const token = JSON.parse(tokenStorage).token;
                try {
                    const response = await fetch('http://localhost:8080/user/info', {
                        method: 'GET',
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    });
                    if (response.ok) {
                        try {
                            const data = await response.json();
                            setFullName(data.name);
                        } catch (jsonError) {
                            console.error('Error parsing JSON:', jsonError);
                        }
                    } else {
                        console.error('Failed to fetch fullname');
                    }
                } catch (error) {
                    console.error('Error fetching fullname:', error);
                }
            }
        };

        const getExpenses = async () => {
            const tokenStorage = sessionStorage.getItem('token');
            if (tokenStorage) {
                const token = JSON.parse(tokenStorage).token;
                try {
                    const response = await fetch('http://localhost:8080/getExpenses', {
                        method: 'GET',
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    });
                    if (response.ok) {
                        try {
                            const data = await response.json();
                            setExpenses(data);
                        } catch (jsonError) {
                            console.error('Error parsing JSON:', jsonError);
                        }
                    } else {
                        console.error('Failed to fetch expenses');
                    }
                } catch (error) {
                    console.error('Error fetching expenses:', error);
                }
            }
        };

        getFullName();
        getExpenses();
    }, []);

    return (
        <div>
            <h1>Expenses Overview</h1>
            <p>This is the overview page for {fullName}</p>
            <div className="overviewPageInfo">
                <div className="expenseList">
                    <h3> Expenses </h3>
                    <ul>
                        {Array.isArray(expenses) && expenses.length > 0 ? (
                            expenses.map((expense, index) => (
                                <li key={index}>{expense.description}: ${expense.amount} {expense.addedDate} </li>
                            ))
                        ) : (
                            <li>No Expenses Logged</li>
                        )}
                    </ul>
                </div>
                <div className="overallMetrics">
                    <h3>Overall Metrics</h3>
                </div>
            </div>
        </div>
    );
}

export default OverviewPage;