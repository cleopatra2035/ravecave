import React from 'react';
import { Link } from 'react-router-dom';
import AlbumListItemContainer from '../album_list_item_container';

class Headers extends React.Component {
    render() {
        const selected = this.props.selectedPane;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const klass = index === selected ? 'active' : '';

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

class AlbumsGrid extends React.Component {
    render() {
        const albumGrid = this.props.albums.map(album => {
            const { id, name, description, artist_id } = album;

            return (
                <li key={id} className="square">
                    <Link to={`/albums/${id}`}>
                        <div class="art">
                            <img src="https://f4.bcbits.com/img/a1695247235_2.jpg" alt=""></img>
                        </div>
                        <p className="title">
                            {name}
                        </p>
                    </Link>
                </li>
            );
        });

        return (
            <ol className="editable-grid">
                {albumGrid}
            </ol>
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

    // albumList(albums) {
    //     return albums.map(album => (
    //         <AlbumListItemContainer
    //             album={album}
    //             key={album.id}
    //         />
    //     ))
    // }

    render() {
        const pane = this.props.panes[this.state.selectedPane];
        const { artist, albums } = this.props;

        const grid = pane.title === 'music' ? (
            <div>
                <AlbumsGrid albums={this.props.albums}/>
            </div>
        ) : (
            <div>
                merch
            </div>
        );

        return (
            <div>
                {/* <div className='tabs'> */}
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
                {/* </div> */}
            </div>
        );
    }
}
