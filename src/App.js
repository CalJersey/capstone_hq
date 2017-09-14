import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route path="/dashboard/:id" component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
