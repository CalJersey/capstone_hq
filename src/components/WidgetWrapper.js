import React, { Component } from "react";
import $ from "jquery-ajax";
import LoginSignupForm from "./LoginSignupForm";
import {notify} from 'react-notify-toast';
import {Redirect} from 'react-router-dom';
import betterFetch from '../scripts/betterFetch.js'

class WidgetWrapper extends Component {
  //props I need: widgetID
  // constructor() {
  //   super();
  //   this.state = {
  //     redirect:false,
  //     user:{},
  //     api: {},
  //     instanceData: {}
  //   },
  //   this.ApiUrlStub = global.config.Env.lbApiUrl,
  //   this.handleSubmit=this.handleSubmit.bind(this);
  // }
  //
  // loadApiData(){
  //
  // }
  //
  // loadWidgetData(){
  //
  // }
  //
  //
  // callApi() {
  //   let access_token = global.config.SessionCtrl.
  //   params.url = (global.config.Env.lbApiUrl + '/APIs/findOne')
  //   params.filter = `{"where":{"name":"${InstanceData.apiName}"}}`
  //   params.method = "GET"
  //   params.headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   };
  //
  //
  //   betterFetch('//offline-news-api.herokuapp.com/stories')
  // 	.then(function(response) {
  // 		if (response.status >= 400) {
  // 			throw new Error("Bad response from server");
  // 		}
  // 		return response.json();
  // 	})
  // 	.then(function(stories) {
  // 		console.log(stories);
  // 	});
  // }
  //
  // componentDidMount() {
  //   this.loadInstance()
  // }
  // //THis is where the magic happens. This function handles both signup and login
  // handleSubmit(e) {
  //   let email=e.email;
  //   let password=e.password;
  //   let ApiUrl = global.config.EnvConfig.lbApiUrl + 'Users'
  //   if (e.action === 'Login') {
  //     ApiUrl = ApiUrl + '/login'
  //   }
  //   $.ajax({
  //       method: "POST",
  //       url: ApiUrl,
  //       data: {
  //       email: email,
  //       password: password
  //     }
  //   }).then(res => {
  //     console.log("res is ", res);
  //     if (e.action === 'Signup'){
  //       global.config.SessionCtrl.setSessionKey('userId',res.id)
  //       let newAction = 'Login'
  //       let login = {email: email, password: password, action: newAction}
  //       this.handleSubmit(login)
  //     } else {
  //       global.config.SessionCtrl.setSessionKey('userId',res.userId)
  //       global.config.SessionCtrl.setSessionKey('ACCESS_TOKEN',res.id);
  //       this.setState({redirect:true, userId:res.userId})
  //       console.log("SS",sessionStorage);
  //     }
  //   }, err => {
  //     notify.show(err.responseJSON.error.message,'error');
  //   });
  // }
  //
  //
  // render() {
  //   console.log("red:",this.state.redirect)
  //   if (this.state.redirect) {
  //     let redirectRoute = `/dashboard/${this.state.userId}`;
  //     return <Redirect to={redirectRoute} push />;
  //   }
  //   return(
  //
  //     <LoginSignupForm
  //       onUserSubmit={this.handleSubmit}
  //       />
  //   )
  // }
}
export default WidgetWrapper;
