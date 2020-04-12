import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import AlbumIndexContainer from './albums/album_index_container';
import Home from './home/home';

const App = () => (


    // <div className="wrapper">
    <div>
        <Modal />
        <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute path='/login' component={LogInFormContainer} />
            <AuthRoute path='/signup' component={SignUpFormContainer} />
            <Route path='/albums' component={AlbumIndexContainer} />
        </Switch>
    </div>
);

export default App;