import React from 'react';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => (
    <li>
        <Link to={`/artists/${artist.id}`}>
            <span>{artist.id}</span>
            <span>{artist.name}</span>
        </Link>
    </li>
);

// class ArtistIndexItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         const artistId = this.props.artist.id;
//         this.props.history.push(`/artists/${artistId}`);
//     }

//     render() {
//         const { name } = this.props.artist;
//         return (
//             <div
//                 className="artist-index-item"
//                 onClick={this.handleClick}
//             >
//                 <div className="index-item-info">
//                     <span className="index-item-name">Name:</span>
//                     <span className="index-item-copy">{name}</span>
//                 </div>
//             </div>
//         );
//     }
// }

export default ArtistIndexItem;