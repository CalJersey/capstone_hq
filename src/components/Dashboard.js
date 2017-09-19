import React, { Component, PropTypes } from "react";
import {Redirect} from 'react-router-dom';
import {notify} from 'react-notify-toast';
import WidgetWrapper from './WidgetWrapper';
import $ from 'jquery-ajax';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {redirect: false};

  }
  componentDidUpdate(){
    this.setState({redirect:false})
  }
  // async function loadUserWidgets(){

  //   const response = await betterFetch.get(params);
  //   const json = await response.json();
  //       const response = await fetch('some-url', {});
  //       const json = await response.json();
  //       console.log(json)
  //       return json;
  //   }

  loadUserWidgets(){
    let ApiUrl = `${global.config.Env.lbApiUrl}Widgets?`;
    let ApiQs = `access_token=${global.config.SessionCtrl.sessionKey('ACCESS_TOKEN')}&`
    ApiQs = ApiQs + `filter={"where":{"user_Id":${global.config.SessionCtrl.sessionKey('userId')}}`;
    ApiQs = ApiQs + `,"include":"api_"}`;
    ApiUrl = ApiUrl + ApiQs;
    $.ajax({
          method: "GET",
          url: ApiUrl,
          error: (res)=>{notify.show(res.responseJSON.error.message,'error')},
          complete: (res)=>{console.log("res=",res.responseJSON);return res.responseJSON}
        })
      }

  render() {
    console.log("AUTH=",global.config.SessionCtrl.isAuthenticated())
    let redirect = this.state.redirect
    if (!global.config.SessionCtrl.isAuthenticated()){
        redirect = true;
    }
    if (redirect) {
      let redirectRoute = `/`;
      let err = 'You must be logged in to view that page.'
      global.config.LSCtrl.setUserRedirectMessage({err},'error')
      return <Redirect to={redirectRoute} push />;
    }
    // console.log(global.config.SessionCtrl.isAuthenticated())
    // console.log(global.config.SessionCtrl.sessionKey('userId'))
    // if (!global.config.SessionCtrl.isAuthenticated()){alert('no auth')}
    // if (!global.config.SessionCtrl.sessionKey('userId')){alert('no userId')}

      let userWidgets = this.loadUserWidgets()
      let renderWidgets = []
      if(userWidgets){
        userWidgets.forEach(function(item,index){
          renderWidgets.push(<div className="DashboardWidget xl3 l4 m6 s12 "><WidgetWrapper key={index} props={item} /></div>)
        })
      }
    return (
      <div className="dashboard row">

        {renderWidgets}

      </div>

    )
  }
}

export default Dashboard
