//set global variables, inclding environment specifc info
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import Config from './components/config'
import App from './components/App';
import { config } from 'react-loopback';

let globalConfig = require('./config');
global.config = globalConfig;
console.log(global.config)

//react-Loopback config url
config.set('baseUrl', 'http://localhost:3000/api/');

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
  ),document.getElementById('root')
)
