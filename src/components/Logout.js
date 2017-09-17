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
    let accessToken = global.sessionController.getSessionKey('ACCESS_TOKEN');
    let apiUrl = global.EnvConfig.lbApiUrl + 'Users/logout?access_token=' + accessToken;

    console.log("at",accessToken)
    $.ajax({
        method: "POST",
        url: apiUrl,
        data: {access_token: accessToken}
      }).then(res => {
      global.sessionController.destroyUserSession()
      global.localStorageController.destroyUserLocalStorage()
      global.localStorageController.setUserRedirectMessages('You have been logged out successfully.','success')
      this.setState({redirect:true, redirectPath:'/'})
    }, err => {
      console.log(err)
      global.localStorageController.setUserRedirectMessages(err.responseJSON.error.message,'error')
      this.setState({redirect: true, redirectPath:`/dashboard/${global.sessionController.getSessionKey('userId')}`})
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
