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
      console.log("props=",this.props.data)
    return(
      <div className="col xl3 l4 m6 s12">
        <div className="card white lighten-1 center">
          <div className="card-content teal-text text-lighten-1">
            <span className="widgetLogo"><img src={"../../src/dashboardApis/MWDict/assets/images/mwLogo.png"} /></span>
            <span className="card-title">{this.props.data.name}</span>
          </div>
          <div className="card-action">
           <MWDict data={this.props.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default MWDictWrapper
