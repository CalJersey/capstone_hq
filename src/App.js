import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import MainLayout from './components/MainLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={MainLayout}/>
      </div>
    );
  }
}

export default App;
