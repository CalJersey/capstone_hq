import React, { Component, PropTypes } from "react";
import {notify} from 'react-notify-toast';
import betterFetch from '../scripts/betterFetch.js';
import WidgetWrapper from './WidgetWrapper';

class Dashboard extends Component {

  // async function loadUserWidgets(){
  //   let params = {
  //     data: {
  //       filter: `{"where":{"user_Id":"${global.config.SessionCtrl.sessionKey('userId')}"}}`,
  //       access_token: global.config.SessionCtrl.sessionKey('ACCESS_TOKEN')
  //     },
  //     url: `${global.config.Env.lbApiUrl}Widgets`
  //   }
  //   const response = await betterFetch.get(params);
  //   const json = await response.json();
  //       const response = await fetch('some-url', {});
  //       const json = await response.json();
  //       console.log(json)
  //       return json;
  //   }

    async function loadUserWidgets(url) {
      let params = {
          data: {
            filter: `{"where":{"user_Id":"${global.config.SessionCtrl.sessionKey('userId')}"}}`,
            access_token: global.config.SessionCtrl.sessionKey('ACCESS_TOKEN')
          },
          url: `${global.config.Env.lbApiUrl}Widgets`
        };
      let res;
      try {
        res = await betterFetch.get(params);
      } catch(e) {
        return processDataInWorker(res);
      }
      return processDataInWorker(res);
    }
    // betterFetch.get(params)
    // .then((res) => {
    //   if(response.ok) {
    //     let resJson = res.json();
    //     console.log("res is ", resJson);
    //     return resJson
    //   } else {
    //     notify.show(response.json,'error');
    //   }
    // })
    // .then((json) =>{
    //   return
    // })
      // if (e.action === 'Signup'){
      //   global.config.SessionCtrl.setSessionKey('userId',res.id)
      //   let newAction = 'Login'
      //   let login = {email: email, password: password, action: newAction}
      //   this.handleSubmit(login)
      // } else {
      //   global.config.SessionCtrl.setSessionKey('userId',res.userId)
      //   global.config.SessionCtrl.setSessionKey('ACCESS_TOKEN',res.id);
      //   global.config.SessionCtrl.setSessionKey('email',email)
      //   this.setState({redirect:true, userId:res.userId})
      //   console.log("SS",sessionStorage);
      // }
  //   }, err => {
  //     notify.show(err.responseJSON.error.message,'error');
  //   });
  // }
  render() {
    // console.log(global.config.SessionCtrl.isAuthenticated())
    // console.log(global.config.SessionCtrl.sessionKey('userId'))
    // if (!global.config.SessionCtrl.isAuthenticated()){alert('no auth')}
    // if (!global.config.SessionCtrl.sessionKey('userId')){alert('no userId')}

      async function userWidgets() {
        const widgets = await loadUserWidgets();
        console.log(widgets)
      }
      })
      //let renderWidgets = []
      // if(userWidgets){
      //   userWidgets.forEach(function(item,index){
      //     renderWidgets.push(<WidgetWrapper widgetId={item.id} />)
      //   })
      // }
    return (
      <div className="dashboard">
        <h2 className="dashboard-header">Your HUH! Dashboard</h2>
        {renderWidgets}

      </div>

    )
  }
}

export default Dashboard
