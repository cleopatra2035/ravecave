import React from 'react';
import { withRouter } from 'react-router-dom';

class SongPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            songUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        }

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
}