import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { config } from 'react-loopback';
import './globalConfig';
import './sessionController';

//base url for react-loopback #ToDo: move somewhere more appropriate
config.set('baseUrl', global.EnvConfig.lbApiUrl);


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),document.getElementById('root')
)
