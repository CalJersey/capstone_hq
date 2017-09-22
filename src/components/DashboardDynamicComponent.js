import React, { Component } from 'react';
import * as dashboardApis from '../dashboardApis/'

class DashboardDynamicComponent extends Component{

  render(){
    const ThisApi = dashboardApis[this.props.componentName]
    return (<ThisApi props={this.props} />)
  }
}
export default DashboardDynamicComponent
