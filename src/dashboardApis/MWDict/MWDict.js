import React, { Component, PropTypes } from "react";

class MWDict extends Component {
  constructor(){
    super();
    this.state ={

    };
  }

render(){

  return(
    <div>
      <div>
      <form onSubmit={this.handleSubmit} className="MWDictSearch" Id="#MWDictSearch">
        <input
          type="text"
          placeholder="word or phrase to lookup"
          value={this.state.keyword}
          onChange={this.handleKeywordChange}
          name="MWDictKeyword"/>
          <button id="MWDictQuery"
          name="MWDictQuery"
          className="btn btn-small btn-primary"
          value="Look It Up"
          type="submit">
            <span className="btn-small-text">Look It Up</span>
            <i className="small material-icons">launch</i>
          </button>
      </form>
      </div>
      <div></div>
    </div>
  )
}
// this.
//   fetchData(){
//
//     fetch('http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=d5060fb7-003d-49fe-acce-9f5383615493')
//     .then(function(response){
//       if (response.ok){
//         return response.json()
//
//       }
//
//     })
//   }
  //
  // componentWillMount(){
  //   this.fetchData();
  // }
  // componentWillUpdate(){
  //   this.fetchData();
  // }

}
export default MWDict
