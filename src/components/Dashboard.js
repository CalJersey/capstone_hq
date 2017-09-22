import React, { Component, PropTypes } from "react";
import {Redirect} from 'react-router-dom';
import {notify} from 'react-notify-toast';
import $ from 'jquery-ajax';
//import DashboardDynamicComponent from './DashboardDynamicComponent'
import MWDict from '../dashboardApis/MWDict/MWDict'
import MWDictWrapper from '../dashboardApis/MWDict/MWDictWrapper'
import MWSpEn from '../dashboardApis/MWSpEn/MWSpEn'
import MWSpEnWrapper from '../dashboardApis/MWSpEn/MWSpEnWrapper'


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
    // $.ajax({
    //      method: "GET",
    //      url: ApiUrl,
    //      error: (res)=>{notify.show(res.responseJSON.error.message,'error')},
    //      complete: (res)=>{console.log("res=",res.responseJSON);return res.responseJSON}
    //     })

    let responseJSON = ([
        {
          "id": 1,
          "APEyeId": 1,
          "userId": 1,
          "aPEye": {
            "name": "Merriam-Webster English-Spanish Translator",
            "base_url": "http://www.dictionaryapi.com/api/v1/references/spanish/xml/language/",
            "app_key_name": "key",
            "app_key_value": "d5060fb7-003d-49fe-acce-9f5383615493",
            "config_1_key": "Keyword",
             "config_1_value": "string",
            "config_2_key": "string",
            "config_2_value": "string",
            "config_3_key": "string",
            "config_3_value": "string",
            "instance_1_key": "string",
            "instance_2_key": "string",
            "instance_3_key": "string",
            "request_format": "XML",
            "component_file_dir": "MWSpEn",
            "component_file_name": "MWSpEn",
            "id": 1
          }
        },
        {
          "id": 6,
          "APEyeId": 2,
          "userId": 1,
          "aPEye": {
            "name": "Merriam-Webster English Dictionary",
            "base_url": "http://www.dictionaryapi.com/api/v1/references/collegiate/xml/",
            "app_key_name": "key",
            "app_key_value": "d5060fb7-003d-49fe-acce-9f5383615493",
            "config_1_key": "Keyword",
            "config_1_value": "string",
            "config_2_key": "string",
            "config_2_value": "string",
            "config_3_key": "string",
            "config_3_value": "string",
            "instance_1_key": "string",
            "instance_2_key": "string",
            "instance_3_key": "string",
            "request_format": "XML",
            "component_file_dir": "MWDict",
            "component_file_name": "MWDict",
            "id": 2
          }
        }
      ]);
      return responseJSON
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
      global.config.LSCtrl.setUserRedirectMessages({err},'error')
        return <Redirect to={redirectRoute} push />;
    }
    console.log(global.config.SessionCtrl.isAuthenticated())
    console.log(global.config.SessionCtrl.sessionKey('userId'))
    if (!global.config.SessionCtrl.isAuthenticated()){alert('no auth')}
    if (!global.config.SessionCtrl.sessionKey('userId')){alert('no userId')}

       let dashboardWidgets = this.loadUserWidgets()
       console.log("dashboardWidgets=",dashboardWidgets)
      // let renderWidgets = []
      // if(userWidgets){
      //   userWidgets.forEach(function(item,index){
      //     console.log("widget=",item)
      //     console.log(item.aPEye)
      //     let widgetComponent = `${item.aPEye.component_file_name}Wrapper`
      //     renderWidgets.push(
      //
      //     )
      //   })

    return (
      <div className="dashboard row">



        <div className="DashboardWidget xl3 l4 m6 s12">
          <MWDictWrapper api={dashboardWidgets[1].aPEye} />
        </div>
      </div>

    )
  }
}

export default Dashboard
