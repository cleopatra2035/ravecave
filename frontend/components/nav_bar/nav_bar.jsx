import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {
    const display = currentUser ? (
        <div id="menubar-wrapper" className="header-rework">
            <div id="menubar-bar" className="menubar-outer fixed">
                <div id="menubar" className="menubar-2018">
                    <ul id="site-nav" className="menubar-section horizontal">
                        <li className="logoLogged">
                            <img src="http://shyeyez.com/ravecave/assets/images/ravecave_logo_smallest.png" alt="logo" />
                        </li>
                    </ul>
                    <ul id="user-nav" className="menubar-section horizontal">
                        <li>
                            <div className="nav-button-logout" onClick={() => logout()}>log out</div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <button onClick={logout}>Logout</button> */}
        </div>
    ) : (
            <div id="header-wrapper" className="header">
                <div className="hd header row">
                    <div className="row">
                        <div className="col col-7-12">
                            <div className="logo">
                                <img src="http://shyeyez.com/ravecave/assets/images/ravecave-logotype-color-optimized.svg" alt="logo" />
                            </div>
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
            </div>
        );
    return (
        <div>
            {display}
        </div>
    )
};

export default NavBar;
