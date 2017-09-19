import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
  render(){
    return(
      <h1 className="header teal-text text-lighten-1"><Link to="/" className="waves-effect">HUH!</Link></h1>
    )
  }
}
export default Logo
