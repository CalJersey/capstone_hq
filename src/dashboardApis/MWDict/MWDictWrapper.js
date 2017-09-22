import React, {Component} from "react";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import $ from "jquery-ajax";
import MWDict from './MWDict';

class MWDictWrapper extends Component {
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
          <span className="card-title">{this.props.api.name}</span>
        </div>
        <div className="card-action">
         <MWDict props={this.props} />
        </div>
      </div>
    )
  }
}

export default MWDictWrapper
