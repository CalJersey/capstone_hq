import React, { Component } from "react";
import $ from "jquery-ajax";
import LoginSignupForm from "./LoginSignupForm";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
//import * as ApiComponents from '../dashboardApis'
//all generic shared widget functions go here
export default class WidgetWrapper extends Component {
  constructor(){
    super();
    this.state = {}
  }

  setTitle(){
    let title = this.props.api.name
  }

  renderTitle(){
    return(<div className="card-content teal-text text-lighten-1">
      <span className="card-title">this.title</span>
     </div>)
  }

  setChildName(){
    let childName=`ApiComponents.${this.props.api.component_file_name}`
  }

  renderContentContainer(){
    return(<div className="card-action">
     <this.childName props="this.props" />
    </div>)
  }

  renderWidgetFrame(){
    this.setTitle()
    this.setChildName()
    this.renderTitle()
    this.renderContentContainer()
  }

  render(){

    return(
      this.renderWidgetFrame()
    )
  }
}
