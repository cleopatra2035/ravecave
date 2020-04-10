import React from 'react';

class ArtistAbout extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = Object.assign({}, this.props.artist);
    // }

    render() {
        const { artist } = this.props;
        
        return (
            <div>
                <h1>{artist.name}</h1>
            </div>
        )
    }
}

export default ArtistAbout;