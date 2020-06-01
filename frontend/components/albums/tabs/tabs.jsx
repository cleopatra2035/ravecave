import React from 'react';
import { Link } from 'react-router-dom';

class Headers extends React.Component {
    render() {
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const klass = index === selected ? 'active' : 'inactive';

            return (
                <li
                    key={index}
                    className={klass}
                    onClick={() => this.props.onTabChosen(index)}>
                    {title}{' '}
                </li>
            );
        });

        return (
            <ol id="band-navbar">
                {headers}
            </ol>
        );
    }
}

class AlbumInfo extends React.Component {
    render() {
        const { id, name, description, artist_id, artwork } = album;
        
        return (
            <div>
                {name}
            </div>
        );
    }
}

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPane: 0
        };
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(num) {
        this.setState({ selectedPane: num });
    }

    render() {
        const pane = this.props.panes[this.state.selectedPane];
        const { album, artist } = this.props;

        const grid = pane.title === 'music' ? (
            <div>
                <div id="name-section">
                    <h2 className="track-title">
                        {album.name}
                    </h2>
                    <p>by&nbsp; <Link to={`/artists/${album.artist_id}`}>{artist.name}</Link></p>
                </div>
                <div className="middle-column">
                    <div id="album-art-show">
                        <div class="album-art-pic">
                            <img src={album.artwork} />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
                <div>
                    merch
                </div>
            );

        return (
            <div>
                <div id="customHeaderWrapper">
                    <Headers
                        selectedPane={this.state.selectedPane}
                        onTabChosen={this.selectTab}
                        panes={this.props.panes}>
                    </Headers>
                </div>
                <div className="albums-grid">
                    {grid}
                </div>
            </div>
        );
    }
}
