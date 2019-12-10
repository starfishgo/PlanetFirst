import React from "react";
import { NavLink } from 'react-router-dom'; 
import { MDBBtn, MDBIcon } from 'mdbreact';
import logo from '../images/logo.png'
import '../styles/navbar.css'

const Header = () => (
 
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/forum"
    >
      Forum
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/donation"
    >
      Donation
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/dashboard"
    >
      Dashboard
    </NavLink>
    <NavLink className="navbar__link" to="/search">
        <MDBIcon icon="search" size="lg" className="green-text pr-3"/>
    </NavLink>

    <NavLink className="navbar__link" to="/signup">
      <MDBBtn color="green" size="sm">Sign Up</MDBBtn>
    </NavLink>
    
  </nav>
);

export default Header;