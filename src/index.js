import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { config } from 'react-loopback';
import './globalConfig'

config.set('baseUrl', 'http://localhost:3000/api/');


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),document.getElementById('root')
)
