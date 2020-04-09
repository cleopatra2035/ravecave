import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
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

export default Home;