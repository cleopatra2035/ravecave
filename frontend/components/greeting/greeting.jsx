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
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
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
