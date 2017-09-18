import React, { Component, PropTypes } from "react";
import { createDataLoader } from 'react-loopback';

class Dashboard extends Component {

  render() {
    fetch('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=d5060fb7-003d-49fe-acce-9f5383615493')
    .then(function(response){
      if (response.ok){
        return response.json()

      }

    })
    return (
      <div className="dashboard">
        Dashboard



      </div>

    )
  }
}

export default Dashboard
