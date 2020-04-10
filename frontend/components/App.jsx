import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ArtistShowContainer from './artists/artist_show_container';
import ArtistIndexContainer from './artists/artist_index_container';
import Home from './home/home';
import Footer from './footer/footer';
// import SearchContainer from './search/search_container';

const App = () => (

        
    <div className="wrapper">
        <Modal />
        <div className="inner">
            <Route exact path="/" component={Home} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
        </div>
        <Modal />
        <header>
            <Route path="/" component={Home} />
            {/* <Route path="/" component={NavBarContainer} /> */}
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <Route path="/artists/:artistId" component={ArtistShowContainer} /> */}
            {/* <Route path="/artists" component={ArtistIndexContainer} /> */}
        </Switch>
    </div>
);

export default App;