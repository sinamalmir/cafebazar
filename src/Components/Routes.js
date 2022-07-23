import React from 'react';
import { Route , Switch , Redirect } from "react-router-dom";

// pages
import Game from '../Pages/Game';
import Applications from '../Pages/Applications';
import CategoryApp from '../Pages/CategoryApp';
import CategoryGame from '../Pages/CategoryGame';
import ChildApp from '../Pages/ChildApp';
import InstallBazar from '../Pages/InstallBazar';
import Signup from '../Pages/Signup';

const Routes = () => {
    return (
        <Switch>
            <Route path='/homePage' component={Game} />
            <Route path='/app' component={Applications} />
            <Route path='/category-app' component={CategoryApp} />
            <Route path='/category-game' component={CategoryGame} />
            <Route path='/childapp' component={ChildApp} />
            <Route path='/install' component={InstallBazar} />
            <Route path='/signup' component={Signup} />
            <Redirect to='/app' />

        </Switch>
    );
};

export default Routes;