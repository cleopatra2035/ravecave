import React from 'react';
import { Link } from 'react-router';
import AlbumListItemContainer from './album_list_item_container';
import SlimNavContainer from '../slim_nav/slim_nav_container';

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

        return (
            <div>
                <SlimNavContainer />
                <div id="artist-page-wrapper">
                    <div id="inner-artist-wrapper">
                        <div id="pageBlack">
                            <div id="customHeaderWrapper">
                                <ol id="band-navbar">
                                    <li><a href="#" class="selected">music</a></li>
                                    <li><a href="#">merch</a></li>
                                </ol>
                            </div>
                            <div class="albums-grid">
                                <h3>Albums</h3>
                                {this.albumList(albums)}
                            </div>
                            <div class="artist-info-bar">
                                <p id="artist-name-location">
                                    <span class="name">{artist.name}</span>
                                    <span class="location">{artist.location}</span>
                                </p>
                                <ol id="band-links">
                                    <li>
                                        <a target="_blank" href={`https://www.${artist.url}`}>{artist.url}</a>
                                    </li>
                                </ol>
                                <ul>
                                    <li>Website: </li>
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