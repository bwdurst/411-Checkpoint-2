import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/Listings'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            {/* <Route path="/about" component={About} />
            <Route path="/addlisting" component={Car} />
            <Route path="/login" component={Dashboard} /> */}
            {/* <Route path="/import" component={Import} /> */}
        </Switch>
    );
};

export default Router;