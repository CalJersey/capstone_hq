import React, { Component } from 'react';
import MWSpEn from '../dashboardApis/MWSpEn/MWSpEn'
import MWSpEnWrapper from  '../dashboardApis/MWSpEn/MWSpEnWrapper'
import MWDict from '../dashboardApis/MWDict/MWDict'
import MWDictWrapper from  '../dashboardApis/MWDict/MWDictWrapper'

class DashboardDynamicComponent extends Component {

    render() {
       const TagName = this.props.componentName || 'Component';
       return <TagName props={this.props} />
    }
}
export default DashboardDynamicComponent;
