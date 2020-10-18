import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Headbar from './core/components/Headbar';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => (
    <BrowserRouter>
        <Headbar/>
        <Switch>
            <Route path='/' exact>
                <Home/>
            </Route>
            <Route path='/search' exact>
                <Search/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;