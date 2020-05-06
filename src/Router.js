import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import ListingContainer from './containers/ListingContainer'
import Business from './containers/Business'
import Login from './components/Login'
import AddListing from './containers/AddListing'

const checkAuth = () => (document.cookie === 'loggedIn=true') ? true : false;

const ProtectedRoute = ({ ...theRest }) => {
    if (checkAuth()) {
        return <Route {...theRest} />
    }
    else {
        return <Redirect to={{ pathname: '/login' }} />
    }
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ListingContainer} />
            <Route path="/business/:id" component={Business} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/addlisting" component={AddListing} />
        </Switch>
    );
};

export default Router;