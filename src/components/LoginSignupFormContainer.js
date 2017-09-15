import React, { Component } from "react";
import $ from "jquery-ajax";
import LoginSignupForm from "./LoginSignupForm";
import {notify} from 'react-notify-toast';

class LoginSignupFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      userId: this.props.userId,
      isAuthenticated: this.props.isAuthenticated,
    }
    // this.setAuthState=this.setAuthState.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.setAuthState=this.setAuthState.bind(this);
  }

  handleSubmit(e) {
    let email=e.email;
    let password=e.password;
    let ApiUrl = global.customConfig.lbApiUrl + 'Users'
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
        this.setState({isAuthenticated: false, userId: res.id});
        let newAction = 'Login'
        let login = {email: email, password: password, action: newAction}
        this.handleSubmit(login)
      }
      this.setState({isAuthenticated: true, userId: res.id});
      this.setAuthState(true,res.id);

    }, err => {
      notify.show(err.responseJSON.error.message,'error');
    });
  }
  setAuthState(isAuth,userId){
    this.setState({isAuthenticated:isAuth, userId:userId});
  }

  render() {
    return(

      <LoginSignupForm
        userId={this.state.userId}
        isAuthenticated={this.state.isAuthenticated}
        onUserSubmit={this.handleSubmit}
        setAuthState={this.setAuthState}
        />
    )
  }
}
export default LoginSignupFormContainer;
