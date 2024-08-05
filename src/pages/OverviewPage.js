import React, { useEffect, useState } from 'react';

function OverviewPage() {
    const [fullName, setFullName] = useState('');

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
                            // console.log(await response);
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

        getFullName();
    }, []);

    return (
        <div>
            <h1>Expenses Overview</h1>
            <p>This is the overview page for {fullName}</p>
        </div>
    );
}

export default OverviewPage;