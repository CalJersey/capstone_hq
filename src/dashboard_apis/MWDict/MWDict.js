import React, { Component, PropTypes } from "react";

class Dashboard extends Component {
  constructor(){
    super();
    this.state ={

    };
  }

  fetchData(){

    fetch('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=d5060fb7-003d-49fe-acce-9f5383615493')
    .then(function(response){
      if (response.ok){
        return response.json()

      }

    })
  }

  componentWillMount(){
    this.fetchData();
  }
  componentWillUpdate(){
    this.fetchData();
  }

}

export default Dashboard
