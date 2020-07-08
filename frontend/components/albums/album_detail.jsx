import React from 'react';
import { Link } from 'react-router';
import SlimNavContainer from '../slim_nav/slim_nav_container';
import Tabs from './tabs/tabs';

class AlbumDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    componentDidMount() {
        this.props.fetchArtistAlbum(this.props.albumId).then(() => this.props.fetchSongs(this.props.albumId));
        // this.props.fetchArtists();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.albumId !== this.props.albumId) {
            this.props.fetchArtistAlbum(this.props.albumId).then(() => this.props.fetchSongs(this.props.albumId));
        }
    }

    render () {
        const { album } = this.props;
        const panes = [
            { title: 'music', content: 'music here' },
            { title: 'merch', content: 'merch here' },
        ];
        const { artist } = this.props;
        const { tracks } = this.props;

        return (
            <div>
                <SlimNavContainer />
                <div id="artist-page-wrapper">
                    <div id="inner-artist-wrapper">
                        <div id="pageBlack">
                            <Tabs panes={panes} album={album} artist={artist} tracks={tracks}/>
                        </div>
                        <div id="pageBlack-footer">
                            <div id="pageBlack-footer-inner">
                                <div id="footer-logo">
                                    <img src="http://shyeyez.com/ravecave/assets/images/ravecave-logotype-gray.svg" alt="logo" />
                                </div>
                                <ul id="legal" className="horizontal-legal">
                                    <li>
                                        <a href="http://viviennevanvliet.com/" target="_blank">About Me</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/cleopatra2035" target="_blank">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/viviennevanvliet/" target="_blank">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="https://angel.co/u/viviennevanvliet" target="_blank">AngelList</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AlbumDetail;

// return (
//     <div>
//         <ul>
//             <li>Name: {album.name}</li>
//             <li>Description: {album.description}</li>
//             <li></li>
//         </ul>
//     </div>
// )