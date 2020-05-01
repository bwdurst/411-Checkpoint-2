import React from 'react'
import { Switch, Route } from 'react-router'
import ListingContainer from './containers/ListingContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ListingContainer} />
            {/* <Route path="/about" component={About} />
            <Route path="/addlisting" component={Car} />
            <Route path="/login" component={Dashboard} /> */}
            {/* <Route path="/import" component={Import} /> */}
        </Switch>
    );
};

export default Router;