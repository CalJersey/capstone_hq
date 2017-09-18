import React, { Component } from "react";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import {api_name} from './.config'
import dashboardWrapper from '../dashboardWrapper'

class Wrapper extends WidgetWrapper {
  constructor() {
    super();
    this.state = {
      redirect:false,
      user:{},
      api: {},


    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  //THis is where the magic happens. This function handles both signup and login
  callApi(e) {
    let email=e.email;
    let password=e.password;
    let ApiUrl = global.config.EnvConfig.lbApiUrl + 'Users'
    if (e.action === 'Login') {
      ApiUrl = ApiUrl + '/login'
    }
    $.ajax({
        method: "POST",
        url: ApiUrl,
        data: {
        email: email,
        password: password
      }
    }).then(res => {
      console.log("res is ", res);
      if (e.action === 'Signup'){
        global.config.SessionCtrl.setSessionKey('userId',res.id)
        let newAction = 'Login'
        let login = {email: email, password: password, action: newAction}
        this.handleSubmit(login)
      } else {
        global.config.SessionCtrl.setSessionKey('userId',res.userId)
        global.config.SessionCtrl.setSessionKey('ACCESS_TOKEN',res.id);
        this.setState({redirect:true, userId:res.userId})
        console.log("SS",sessionStorage);
      }
    }, err => {
      notify.show(err.responseJSON.error.message,'error');
    });
  }

  loadInstanceData()

  render() {
    console.log("red:",this.state.redirect)
    if (this.state.redirect) {
      let redirectRoute = `/dashboard/${this.state.userId}`;
      return <Redirect to={redirectRoute} push />;
    }
    return(

      <LoginSignupForm
        onUserSubmit={this.handleSubmit}
        />
    )
  }
}
export default Wrapper;
