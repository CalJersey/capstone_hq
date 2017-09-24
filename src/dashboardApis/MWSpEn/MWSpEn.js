import React, { Component, PropTypes } from "react";
import $ from "jquery-ajax"
import {notify} from 'react-notify-toast'
import { DOMParser } from 'xmldom'
import xmlToJSON from 'xmltojson'
import jsonMarkup from 'json-markup'
xmlToJSON.stringToXML = (string) => new DOMParser().parseFromString(string, 'text/xml');


class MWSpEn extends Component {
  constructor(){
    super();
    this.state ={
      MWSpEnKeyword: "",
      renderedResults: "",
      MWSpEnContent: ""

    };
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
      let fetchUrl = `${this.props.data.base_url}${this.state.MWSpEnKeyword}?${this.props.data.app_key_name}=${this.props.data.app_key_value}`
      console.log("FU=",fetchUrl)
      $.ajax({
        method: "GET",
        url: fetchUrl,
        dataType: "XML",
        error: (res) => {
          console.log("res=",res)
          notify.show("An Error has Occured. Please Try Again", 'error')
        },
      complete: (res)=>{this.renderResults(res)}
    })
  }

  handleKeywordChange(e) {
    e.preventDefault()
    this.setState({MWSpEnKeyword: e.target.value});
  }

  renderResults(results){
    //console.log("results=",xmlToJSON.parseString(results))
    //let newContent = results
    //let newerContent = ""
    // newContent.entry_list[0].entry.forEach((item,index)=>{
    //   item.def.forEach((item2,index2)=>{
    //     item2.dt.forEach((item3,index3)=>{
    //       let thisDef = item3._text.replace(':','').trim()
    //
    //       if (thisDef.length){
    //       newerContent = `${newerContent}<li>${thisDef}</li>`
    //     }})
    //   })
    // })

  let newerContent = `
    <strong>${this.state.MWSpEnKeyword}:</strong><br />
    <pre>${results}</pre>`

  this.setState({MWSpEnContent: newerContent})
  }

  createMarkup(strIn) { return {__html: strIn}; };

  render(){
    console.log(this.props)
  return(
    <div>
      <script src={"%PUBLIC_URL%assets/styles/MWSpEnStyles.css"}></script>
      <div>
      <form onSubmit={this.handleSubmit} className="MWSpEnSearch" id="#MWSpEnSearch">
        <input
          type="text"
          placeholder="word or phrase to lookup"
          value={this.state.MWSpEnKeyword}
          onChange={this.handleKeywordChange}
          name="MWSpEnKeyword"/>
          <button id="MWSpEnQuery"
          name="MWSpEnQuery"
          className="btn btn-small btn-primary"
          value="Look It Up"
          type="submit">
            <span className="btn-small-text">Look It Up</span>
            <i className="small material-icons">launch</i>
          </button>
      </form>
      </div>
      <div className="MWSpEnContent" dangerouslySetInnerHTML={this.createMarkup(this.state.MWSpEnContent)} />
    </div>
    )
  }
}
export default MWSpEn
