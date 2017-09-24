import React, {Component,PropTypes} from "react";
import {Redirect} from 'react-router-dom';
import {notify} from 'react-notify-toast';
import $ from 'jquery-ajax';
//import DashboardDynamicComponent from './DashboardDynamicComponent'
// import MWDict from '../dashboardApis/MWDict/MWDict'
import MWDictWrapper from '../dashboardApis/MWDict/MWDictWrapper'
//import MWSpEn from '../dashboardApis/MWSpEn/MWSpEn'
import MWSpEnWrapper from '../dashboardApis/MWSpEn/MWSpEnWrapper'
//import * as dashboardApiWrappers from '../dashboardApis/'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      renderedWidgets: []
    };

  }
    // componentDidUpdate() {
    //   this.setState({
    //     redirect: false
    //   })
    // }

  componentWillMount(){
    //console.log("dashboardApiWrappers=",dashboardApiWrappers)
    let dashboardWidgets = this.loadUserWidgets()
  }
  // async function loadUserWidgets(){

  //   const response = await betterFetch.get(params);
  //   const json = await response.json();
  //       const response = await fetch('some-url', {});
  //       const json = await response.json();
  //       console.log(json)
  //       return json;
  //   }

  loadUserWidgets() {
    let ApiUrl = `${global.config.Env.lbApiUrl}Widgets?`;
    let ApiQs = `access_token=${global.config.SessionCtrl.sessionKey('ACCESS_TOKEN')}&`
    ApiQs = ApiQs + `filter={"where":{"userId":${global.config.SessionCtrl.sessionKey('userId')}}`;
    ApiQs = ApiQs + `,"include":"aPEye"}`;
    ApiUrl = ApiUrl + ApiQs;
    console.log(ApiUrl);
    //http://localhost:3000/api/Widgets?access_token=lHKF5SmkXiRUwXwUIxrp9SplJellmeGeNLhsicatJdNJN2QUdnvuHt4AeCfsjtfI&filter={%22where%22:{%22user_Id%22:1},%22include%22:%22api_%22}".
    $.ajax({
      method: "GET",
      url: ApiUrl,
      error: (res) => {
        notify.show(res.responseText, 'error')
      },
      complete: (res)=>{this.renderWidgets(res.responseJSON)}
    })
  }

  renderDynamicApiComponent(api){
    const Component= `${api.component_file_name}Wrapper`
    return (<Component props={api} />)
  }

  renderWidgets(dashboardWidgets){
    console.log("dw=",dashboardWidgets)
    this.setState({renderedWidgets:dashboardWidgets})
  }

  render() {
    let redirect = this.state.redirect
    if (!global.config.SessionCtrl.isAuthenticated() || !global.config.SessionCtrl.sessionKey('userId'))  {
      redirect = true;
    }
    if (redirect) {
      let redirectRoute = `/`;
      let err = 'You must be logged in to view that page.'
      global.config.LSCtrl.setUserRedirectMessages({
        err
      }, 'error')
      return <Redirect to = {redirectRoute} push /> ;
    }

    //Dynamically generate dashboard widgets : this is causing a RangeError: Maximum call stack size exceeded
    // let dashboardWidgets = this.state.renderedWidgets
    // if (dashboardWidgets) {
    //   let theseWidgets = []
    //   let renderDynamicApiComponent = this.renderDynamicApiComponent
    //   dashboardWidgets.forEach(function(item, index) {
    //     let thisWidget = renderDynamicApiComponent(item.aPEye)
    //     theseWidgets.push(
    //       <div className = "DashboardWidget xl3 l4 m6 s12">
    //         {thisWidget}
    //       </div>
    //     )
    //   })
    //
    //   } else {
    //     let theseWidgets = ""
    //   }
    //<MWSpEnWrapper props={this.state.renderedWidgets[0].aPEye} />
    console.log("rw=",this.state.renderedWidgets)
    if (this.state.renderedWidgets[0]){
      return(
        <div className="dashboard row">
          <MWDictWrapper data={this.state.renderedWidgets[0].aPEye} />
          <MWSpEnWrapper data={this.state.renderedWidgets[1].aPEye} />
        </div>
    ) } else{
    return null
    }
  }
}

export default Dashboard
