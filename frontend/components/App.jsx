import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ArtistShowContainer from './artists/artist_show_container';
import ArtistIndexContainer from './artists/artist_index_container';
import AlbumShowContainer from './albums/album_show_container';
import Home from './home/home';

const App = () => (


    // <div className="wrapper">
    <div>
        <Modal />
        <div>
            <Route exact path='/' component={Home} />
            <AuthRoute path='/login' component={LogInFormContainer} />
            <AuthRoute path='/signup' component={SignUpFormContainer} />
            <Route path='/artists/:artistId' component={ArtistShowContainer} />
            {/* <Route exact path='/artists' component={ArtistIndexContainer} />
            <Route path='/albums/:albumId' component={AlbumShowContainer} /> */}
        </div>
    </div>
);

export default App;