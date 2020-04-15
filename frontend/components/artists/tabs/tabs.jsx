import React from 'react';
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

    albumList(albums) {
        return albums.map(album => (
            <AlbumListItemContainer
                album={album}
                key={album.id}
            />
        ))
    }

    render() {
        const pane = this.props.panes[this.state.selectedPane];
        const { artist, albums } = this.props;

        const grid = pane.title === 'music' ? (
            <div>
                {this.albumList(albums)}
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
