import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { config } from 'react-loopback';
import './globalConfig'

config.set('baseUrl', global.customConfig.lbApiUrl);


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),document.getElementById('root')
)
