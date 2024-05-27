import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../api';

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await register({ name, email, password });
            localStorage.setItem('profile', JSON.stringify(data));
            history.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterScreen;
