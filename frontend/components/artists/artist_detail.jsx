import React from 'react';
import { Link } from 'react-router';
// import AlbumListItemContainer from './album_list_item_container';
import SlimNavContainer from '../slim_nav/slim_nav_container';
import Tabs from './tabs/tabs';

class ArtistDetail extends React.Component {
    componentDidMount() {
        this.props.fetchArtist(this.props.artistId);
    }

    albumList(albums) {
        return albums.map(album => (
            <AlbumListItemContainer
                album={album}
                key={album.id}
            />
        ))
    }

    render () {
        const { artist, albums } = this.props;
        const panes = [
            { title: 'music', content: 'music here' },
            { title: 'merch', content: 'merch here' },
        ];

        return (
            <div>
                <SlimNavContainer />
                <div id="artist-page-wrapper">
                    <div id="inner-artist-wrapper">
                        <div id="pageBlack">
                            <Tabs panes={panes} artist={artist} albums={albums} />
                            <div class="artist-info-bar">
                                <div className="artists-profile-pic">
                                    <img src={artist.profile_pic} />
                                </div>
                                <p id="artist-name-location">
                                    <span class="name">{artist.name}</span>
                                    <span class="location">{artist.location}</span>
                                </p>
                                <ol id="band-links">
                                    <li>
                                        <a target="_blank" href={`https://www.${artist.url}`}>{artist.url}</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div id="pageBlack-footer">
                            <div id="pageBlack-footer-inner">
                                <div id="footer-logo">
                                    <img src="http://shyeyez.com/ravecave/assets/images/ravecave-logotype-gray.svg" alt="logo" />
                                </div>
                                <ul id="legal" className="horizontal-legal">
                                    <li>
                                        <a href="#">test</a>
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

export default ArtistDetail;