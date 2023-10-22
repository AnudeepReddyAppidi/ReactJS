import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [userData, setUserData] = useState({ name: '', email: '', password: '' });
    const [taskData, setTaskData] = useState({ title: '', description: '', dueDate: '' });

    const registerUser = async () => {
        const response = await axios.post('/register', userData);
        console.log(response.data);
    };

    const createTask = async () => {
        const response = await axios.post('/task', taskData);
        console.log(response.data);
    };

    return (
        <div>
            <h1>Taskify</h1>

            <div>
                <h2>Register User</h2>
                {/* ...input fields and button calling registerUser... */}

                <h2>Create Task</h2>
                {/* ...input fields and button calling createTask... */}
            </div>
        </div>
    );
}

export default App;
