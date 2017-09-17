import React, { Component } from "react";
import $ from "jquery-ajax";
import LoginSignupForm from "./LoginSignupForm";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';

class LoginSignupFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      redirect:false,
      userId:0
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  //THis is where the magic happens. This function handles both signup and login
  handleSubmit(e) {
    let email=e.email;
    let password=e.password;
    let ApiUrl = global.EnvConfig.lbApiUrl + 'Users'
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
        global.sessionController.setSessionKey('userId',res.id)
        let newAction = 'Login'
        let login = {email: email, password: password, action: newAction}
        this.handleSubmit(login)
      } else {
        global.sessionController.setSessionKey('userId',res.userId)
        global.sessionController.setSessionKey('ACCESS_TOKEN',res.id);
        this.setState({redirect:true, userId:res.userId})
        console.log("SS",sessionStorage);
      }
    }, err => {
      notify.show(err.responseJSON.error.message,'error');
    });
  }


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
export default LoginSignupFormContainer;
