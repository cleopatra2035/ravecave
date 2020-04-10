import React from 'react';
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
    render() {
        return (
            <div id="carousel-wrapper" className="carousel-wrapper">
                <div id="carousel" className="carousel-outer">
                    <div className="carousel-inner">
                        <div className="carousel-main-item">
                            <div className="carousel-item-overlay"></div>
                            <div className="carousel-item-hover-overlay"></div>
                        </div>
                        <a className="carousel-main-item-content" href="#">
                            <div className="row">
                                <div className="col col-12-16">
                                    <div className="carousel-item-content-inner">
                                        <h3 className="carousel-main-item-title">The Experimental Music Scene in Yangon, Myanmar is Eclectic and Resourceful</h3>
                                        <p className="carousel-main-item-subtitle">
                                            From the fringes of the indie rock, punk, and metal scenes, a group of artists bent on inventive deconstruction is starting to coalesce.</p>
                                        <div className="read-more-button">
                                            <div className="read-more">
                                                read more
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <ol className="carousel-small-items">

                            <li className="carousel-small-item1">
                                <div className="carousel-item-overlay"></div>
                                <div className="carousel-item-hover-overlay"></div>
                                <a href="#">
                                    <div className="carousel-small-item-content">
                                        <h3 className="carousel-small-item-title">On “Rakka,” Vladislav Delay Takes Inspiration From Nature—But Don’t Call Him a “Hippie”</h3>
                                        <h4 className="carousel-small-item-subtitle">Feature</h4>
                                    </div>
                                </a>
                            </li>

                            <li className="carousel-small-item2">
                                <div className="carousel-item-overlay"></div>
                                <div className="carousel-item-hover-overlay"></div>
                                <a href="#">
                                    <div className="carousel-small-item-content">
                                        <h3 className="carousel-small-item-title">Soothing Ambiance, Factory Jazz, Tape-Loop Sorcery, and More</h3>
                                        <h4 className="carousel-small-item-subtitle">List</h4>
                                    </div>
                                </a>
                            </li>

                            <li className="carousel-small-item3">
                                <div className="carousel-item-overlay"></div>
                                <div className="carousel-item-hover-overlay"></div>
                                <a href="https://bandcamp.com?show=366" className="carousel-small-bcweekly-link">
                                    <div href="#" className="carousel-bcweekly-play-button"><span className="icon"></span></div>
                                    <div className="carousel-small-item-content">
                                        <h3 className="carousel-small-item-title">Bandcamp Weekly</h3>
                                        <h4 className="carousel-small-item-subtitle">Featuring Gary Bartz, 5 years of Rhythm Section Intl and an LP of the week by Nicolas Jaar </h4>
                                    </div>
                                    <div className="carousel-small-bcweekly-button">
                                        <span className="icon"></span>
                                    </div>
                                </a>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        );
    }
};

export default Carousel;