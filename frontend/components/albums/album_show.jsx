import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    render() {
        const { album } = this.props;

        return (
            <div>
                <h1>{album.name}</h1>
                <p>test</p>
                {/* <Link to="/" /> */}
            </div>
        );
    }
}

export default AlbumShow;