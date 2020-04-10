import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import ArtistIndexContainer from '../artists/artist_index_container';

// export default () => (
//     <div>
//         <h1>Welcome to the Ravecave.</h1>
//     </div>
// )

const Home = () => {
    return (
        <div className="home-container">
            <NavBarContainer />
            {/* <ArtistIndexContainer /> */}
        </div>
    )
};

export default Home;