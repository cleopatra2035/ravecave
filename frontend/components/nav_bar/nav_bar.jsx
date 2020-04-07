import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div class="hd header row">
            <div class="row">
                <div class="col col-7-12">
                    <h1 class="logo">
                        logo here
                    </h1>
                    <h2 class="hd-subtitle">
                        Bridging the gap between artists and their fans. <a class="blue-gradient" href="#">Enter the Ravecave.</a>
                    </h2>
                </div>
                <div class="col col-5-12">
                    <ul class="hd-nav">
                        <li>
                            <Link className="signup-link" to="/signup">sign up</Link>
                        </li>
                        <li class="log-in-link">
                            <Link className="signup-link" to="/login">log in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    return (
        <div id="header-wrapper" class="header">
            {display}
        </div>
    )
};

export default NavBar;
