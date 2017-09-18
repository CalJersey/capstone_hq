import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import $ from 'jquery-ajax';

class Logout extends Component {
  constructor(){
    super()
    this.state = {
      redirect:false,
      redirectPath:'',
    }
  }

  componentDidMount(){
    let accessToken = global.config.SessionCtrl.sessionKey('ACCESS_TOKEN');
    let apiUrl = global.config.Env.lbApiUrl + 'Users/logout?access_token=' + accessToken;

    console.log("at",accessToken)
    $.ajax({
        method: "POST",
        url: apiUrl,
        data: {access_token: accessToken}
      }).then(res => {
      global.config.SessionCtrl.destroyUserSession()
      global.config.LSCtrl.destroyUserLocalStorage()
      global.config.LSCtrl.setUserRedirectMessages('You have been logged out successfully.','success')
      this.setState({redirect:true, redirectPath:'/'})
    }, err => {
      console.log(err)
      global.config.LSCtrl.setUserRedirectMessages(err.responseJSON.error.message,'error')
      this.setState({redirect: true, redirectPath:`/dashboard/${global.config.SessionCtrl.sessionKey('userId')}`})
    });

  }
  render(){

    if (this.state.redirect){
      return( <Redirect to={this.state.redirectPath} /> )
    }
    return false
  }
}


export default Logout
