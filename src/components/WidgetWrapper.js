import React, { Component } from "react";
import $ from "jquery-ajax";
import LoginSignupForm from "./LoginSignupForm";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import * as ApiComponents from '../dashboardApis'
//all generic shared widget functions go here
class WidgetWrapper extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render(){
    let childName=`ApiComponents.${this.props.component_file_name}`
    return(
      <div>
        <div className="card-content teal-text text-lighten-1">
          <span className="card-title">{this.props.api_.name}</span>
         </div>
         <div className="card-action">
          <childName props="this.props" />
         </div>
      </div>
    )
  }


  }
export default WidgetWrapper;
