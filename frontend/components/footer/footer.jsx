import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer-wrapper" className="footer">
                <div className="ft footer row">
                    <div className="row">
                        <div className="col col-3-12">
                            <ul className="ft-nav">
                                <li><a href="#">About Us</a></li>
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