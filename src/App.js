import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Notifications from 'react-notify-toast';
import NotificationsFromPreviousPage from './components/NotificationsFromPreviousPage';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notifications />
        <NotificationsFromPreviousPage />
        <Switch>
          <Route path="/logout/" component={Logout} />
          <Route path="/" component={MainLayout}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
