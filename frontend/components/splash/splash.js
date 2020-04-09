import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const main = (
            <div>
                {/* <div className="splash-main-container" key={mainAlbum.id}>
                    <div className="splash-main-content">
                        <div className="splash-main-content-title">
                            {mainAlbum.name}
                        </div>
                        <div className="splash-main-content-subtitle">
                            by {artists[mainAlbum.artist_id].name}
                        </div>
                        <Link className="listen" to={`/albums/${mainAlbum.id}`}>read more</Link>
                    </div>
                </div> */}

                <div className="splash-main-container">
                    <div className="splash-main-content">
                        <div className="splash-main-content-title">
                            Album Title
                        </div>
                        <div className="splash-main-content-subtitle">
                            by Martyn
                        </div>
                        <Link className="listen" to={`/albums/2`}>read more</Link>
                    </div>
                </div>

                
            </div>
        );

        return (
            <div id="splash-wrapper" className="splash">
                { main }
            </div>
        )
    }
};

export default Splash;