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

  componentWillUpdate(){
    this.props.parentRerender()
  }
  //THis is where the magic happens. This function handles both signup and login
  handleSubmit(e) {
    let email=e.email;
    let password=e.password;
    let ApiUrl = global.config.Env.lbApiUrl + 'Users'
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
        global.config.SessionCtrl.setSessionKey('email',email)
        this.setState({redirect:true, userId:res.userId})
        console.log("SS",sessionStorage);
      }
    }, err => {
      console.log("err=",err)
      notify.show("An unknown error has occured",'error');
    });
  }

  render() {
    //console.log("red:",this.state.redirect)
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
