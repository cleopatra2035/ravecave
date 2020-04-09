import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
<<<<<<< HEAD
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
=======
import Carousel from '../carousel/carousel';
import Footer from '../footer/footer';
import Middle from '../middle/middle';

const Home = () => {
    return (
        <div>
            <NavBarContainer />
            <Carousel />
            <Middle />
            <Footer />
        </div>
    )
}
>>>>>>> artist-profile

export default Home;