import React, { Component } from "react";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import {api_name} from './.config';
import WidgetWrapper from '../../components/WidgetWrapper';

class MWDictWrapper extends Component {
  constructor() {
    super();
    let state = {
      redirect:false,
      user:{},
      api: {},
    }}
}
export default MWDictWrapper;
