import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import AlbumIndexContainer from './albums/album_index_container';
import AlbumShowContainer from './albums/album_show_container';
import ArtistIndexContainer from './artists/artist_index_container';
import ArtistShowContainer from './artists/artist_show_container';
import AlbumDetailContainer from './albums/album_detail_container';
import Home from './home/home';

const App = () => (


    // <div className="wrapper">
    <div>
        <Modal />
        <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute path='/login' component={LogInFormContainer} />
            <AuthRoute path='/signup' component={SignUpFormContainer} />
            <Route path='/albums/:albumId' component={AlbumShowContainer} />
            {/* <Route path='/albums' component={AlbumIndexContainer} /> */}
            {/* <Route path="/artists/:artistId/album/:albumId" component={AlbumDetailContainer} /> */}
            <Route path='/artists/:artistId' component={ArtistShowContainer} />
            <Route path='/artists' component={ArtistIndexContainer} />
        </Switch>
    </div>
);

export default App;