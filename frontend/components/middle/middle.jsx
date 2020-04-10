import React from 'react';
import { Link } from 'react-router-dom';

class Middle extends React.Component {
    render() {
        return (
            // <div id="footer-wrapper" className="footer">
            //     <div className="ft footer row">
            <div className="row">
                <div className="col col-1-16">
                    <div className="row dots"></div>
                </div>
                <div className="col col-14-16">
                    <h4 className="fans-facts">
                        Fans have paid artists $483 million using Bandcamp, and $17.1 million in the last 30 days alone.
                            </h4>
                </div>
                <div className="col col-1-16">
                    <div className="row dots right"></div>
                </div>
            </div>
            //     </div>
            // </div>
        );
    }
};

export default Middle;