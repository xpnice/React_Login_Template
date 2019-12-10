import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/sign-in"
            />
            <Route
                component={SignIn}
                exact
                path="/sign-in"
            />
            <Route
                component={SignUp}
                exact
                path="/sign-up"
            />
             <Route
                component={Home}
                exact
                path="/home"
            />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;
