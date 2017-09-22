import React from "react";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import {api_name} from './.config';
import WidgetWrapper from '../../components/WidgetWrapper';

export default class MWDictWrapper extends WidgetWrapper {
  constructor() {
    super();
    let state = {
      isWaitingForResponse : false
    }
  }
  renderTitle(){
    <div className="card-content teal-text text-lighten-1">
      <span className="widgetLogo"><img src={"images/mwlogo.png"} /></span>
      <span className="card-title">this.title</span>
    </div>
  }
}
