import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer-wrapper" className="footer">
                <div className="ft">
                    <div className="row">
                        <div className="col col-3-12">
                            <ul className="ft-nav">
                                <li><a href="http://viviennevanvliet.com/" target="_blank">About Me</a></li>
                                <li><a href="https://github.com/cleopatra2035" target="_blank">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/viviennevanvliet/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://angel.co/u/viviennevanvliet" target="_blank">AngelList</a></li>
                            </ul>
                        </div>
                        <div className="col col-3-12">

                        </div>
                        <div className="col col-3-12 offset-3-12">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;