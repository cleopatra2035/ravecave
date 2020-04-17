import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
    render() {
        const albumFeatured = this.props.albums.map(album => {
            const { id, name, description, artist_id, artwork } = album;

            return (
                <div className="col col-3-15 featured-album-wrapper">
                    <div className="featured-album">
                        <div className="featured-album-art">
                        <Link to={`/albums/${id}`}>
                            <img className="cover-art-artwork" src={artwork}/>
                        </Link>
                        </div>
                        <h4 className="item-title"><a href="#">
                            <span className="item-title-title">{name}</span>
                            {/* <span className="item-artist">
                                by {artist_id}
                            </span> */}
                        </a></h4>
                        <p className="item-description">
                            {description}
                        </p>
                    </div>
                </div>
            );
        });
        
        return (
            <div className="notable-result result-current">
                {albumFeatured}
            </div>
        );
    }
}

export default AlbumIndexItem;