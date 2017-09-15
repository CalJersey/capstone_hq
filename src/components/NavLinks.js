import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavLinks extends Component {
  render() {
    let dashboardLink = `/dashboard/${global.sessionController.getSessionKey('userId')}`;
    return (
      <div>
        <NavLink to="/" exact activeClassName="active"><li>Home</li></NavLink>
        <NavLink to="/about" exact activeClassName="active"><li>About</li></NavLink>
        if (global.sessionController.isAuthenticated){
          <div>
            <NavLink to={dashboardLink} activeClassName="active"><li>Dashboard</li></NavLink>
            <NavLink to='/logout/' exact activeClassName="active"><li>Logout</li></NavLink>
          </div>
        }
      </div>
    )
  }
}
export default NavLinks;
