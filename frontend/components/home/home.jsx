import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Carousel from '../carousel/carousel';
import Footer from '../footer/footer';
import Middle from '../middle/middle';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <NavBarContainer />
                <Carousel />
                <Middle />
                <Footer />
            </div>
        );
    }
}

export default Home;