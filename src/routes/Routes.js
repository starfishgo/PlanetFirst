import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Donation from "../pages/Donation";
import Forum from "../pages/Forum";
import Dashboard from "../pages/Dashboard";
import Search from "../pages/Search";
import Error from "../pages/Error";
import SignUp from '../pages/SignUp';
import Feedback from '../pages/Feedback';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/donation" component={Donation} />
    <Route path="/forum" component={Forum} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/search" component={Search} />
    <Route path="/signup" component={SignUp} />
    <Route path="/feedback" component={Feedback} />
    <Route component={Error} />
  </Switch>
);

export default Routes;