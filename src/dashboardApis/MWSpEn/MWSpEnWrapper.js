import React, {Component} from "react";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import $ from "jquery-ajax";
import MWSpEn from './MWSpEn';

class MWSpEnWrapper extends Component {
  constructor() {
    super();
    let state = {
      isWaitingForResponse : false                                                                    
    }
  }
  render(){
    console.log("props=",this.props)
    return(

      <div className="card white lighten-1 center">
        <div className="card-content teal-text text-lighten-1">
          <span className="widgetLogo"><img src={"images/mwlogo.png"} /></span>
          <span className="card-title">{this.props.data.name}</span>
        </div>
        <div className="card-action">
         <MWSpEn data={this.props.data} />
        </div>
      </div>
    )
  }
}

export default MWSpEnWrapper
