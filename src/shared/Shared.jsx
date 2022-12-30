import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import LoginPage from '../loginPage/LoginPage';
const Shared = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route path='/dashboard'><Dashboard /></Route>
                <Route path='/'><LoginPage/></Route>
            </Switch>
        </Router>
        </>
    );
};
export default Shared;