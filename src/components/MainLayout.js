import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Splash from './Splash';
import Dashboard from './Dashboard';
//import NavLinks from './NavLinks';

class MainLayout extends Component {
  render() {
    return (
      <div className="main">
        <nav className="white">
          <div className="nav-wrapper container">
            <Link to='/' >Logo</ Link>
            <ul className="right hide-on-med-and-down">

            </ul>

            <ul id="nav-mobile" className="side-nav">

            </ul>
            <a href="" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        <div className="entry">
          <Switch>
            <Route path="/dashboard/" component={Dashboard}/>
            <Redirect to="/" />
          </Switch>
        </div>

        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of college students working on this project like it''s our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default MainLayout;
