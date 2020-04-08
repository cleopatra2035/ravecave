import React from "react";
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Home from './home/home';
// import SearchContainer from './search/search_container';

const App = () => (
    <div className="wrapper">
        <Modal />
        <header>
            <Route path="/" component={NavBarContainer} />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;