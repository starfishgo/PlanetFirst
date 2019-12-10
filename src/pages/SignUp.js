import React from "react";
import '../styles/signup.css'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm.js';

const SignUp = () => {
  return (
    <Router basename="/react-auth-ui/">
    <div className="App">
      <div className="App__Aside"></div>
      <div className="App__Form">

      <div className="PageSwitcher">
        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
        <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
      </div>

      <div className="FormTitle">
        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
        <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
      </div>

      

      <Route path="/sign-up" component={SignUpForm}></Route>
      <Route path="/sign-in" component={SignInForm}></Route>

      </div>

    </div>
    </Router>
  );
};

export default SignUp;