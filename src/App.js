import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Dashboard from './components/Dashboard';
import Notifications from 'react-notify-toast';

class App extends Component {
  constructor
  render() {
    return (
      <div className="App">
        <Notifications />
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route path="/dashboard/:id" component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
