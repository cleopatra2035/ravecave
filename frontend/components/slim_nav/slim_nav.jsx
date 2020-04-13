import React from 'react';
import { Link } from 'react-router-dom';

const SlimNav = ({ currentUser, logout, openModal }) => {
    const display = currentUser ? (
        <div id="menubar-wrapper" className="header-rework">
            <div id="menubar-bar" className="menubar-outer fixed">
                <div id="menubar" className="menubar-2018">
                    <ul id="site-nav" className="menubar-section horizontal">
                        <li className="logoLogged">
                            <img src="http://shyeyez.com/ravecave/assets/images/ravecave-logotype-color-optimized.svg" alt="logo" />
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
            <div id="menubar-wrapper-grey" className="header-rework">
                <div id="menubar-bar-slim" className="menubar-outer fixed">
                    <div id="menubar-slim" className="menubar-2018-grey">
                        <ul id="site-nav" className="menubar-section horizontal">
                            <li className="logoLogged">
                                <img src="http://shyeyez.com/ravecave/assets/images/ravecave-logotype-color-optimized.svg" alt="logo" />
                            </li>
                        </ul>
                        <ul id="user-nav" className="menubar-section horizontal">
                            <li>
                                <div className="nav-button-slim" onClick={() => openModal('signup')}>sign up</div>
                            </li>
                            <li>
                                <div className="nav-button-slim" onClick={() => openModal('login')}>log in</div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <button onClick={logout}>Logout</button> */}
            </div>
        );
    return (
        <div>
            {display}
        </div>
    )
};

export default SlimNav;
