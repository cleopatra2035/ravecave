import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome, {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
            <div>
                <button onClick={() => openModal('login')}>Login</button>
                <button onClick={() => openModal('signup')}>Signup</button>
            </div>
        );
    return (
        <header className="nav-bar">
            <h1>Ravecave</h1>
            <div>
                {display}
            </div>
        </header>
    )
};

export default Greeting;
