import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="hd header row">
            <div className="row">
                <div className="col col-7-12">
                    <h1 className="logo">
                        <div className="logo-img"></div>
                        <div className="logo-text">logo here</div>
                    </h1>
                    <h2 className="hd-subtitle">
                        Bridging the gap between artists and their fans. <a className="blue-gradient" href="#">Enter the Ravecave.</a>
                    </h2>
                </div>
                <div className="col col-5-12">
                    <ul className="hd-nav">
                        <li>
                            <div className="nav-button" onClick={() => openModal('signup')}>sign up</div>
                        </li>
                        <li>
                            <div className="nav-button" onClick={() => openModal('login')}>log in</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    return (
        <div id="header-wrapper" className="header">
            {display}
        </div>
    )
};

export default NavBar;
