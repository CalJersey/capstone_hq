import React, { Component, PropTypes } from "react";
import $ from "jquery-ajax"
import {notify} from 'react-notify-toast'
import { DOMParser } from 'xmldom'
import xmlToJSON from 'xmltojson'
import jsonMarkup from 'json-markup'
xmlToJSON.stringToXML = (string) => new DOMParser().parseFromString(string, 'text/xml');


class MWDict extends Component {
  constructor(){
    super();
    this.state ={
      MWDictKeyword: "",
      renderedResults: "",
      MWDictContent: ""

    };
    this.handleKeywordChange = this.handleKeywordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)


  }
  handleSubmit(e) {
    e.preventDefault()
      let fetchUrl = `${this.props.data.base_url}${this.state.MWDictKeyword}?${this.props.data.app_key_name}=${this.props.data.app_key_value}`
      $.ajax({
        method: "GET",
        url: fetchUrl,
        dataType: "XML",
        error: (res) => {
          console.log("res=",res)
          notify.show(res.responseText, 'error')
        },
        complete: (res)=>{this.renderResults(res)}
      })
    }
  handleKeywordChange(e) {
    e.preventDefault()
    this.setState({MWDictKeyword: e.target.value});
  }

  renderResults(results){
    console.log("results=",xmlToJSON.parseString(results.responseText))
    let newContent = xmlToJSON.parseString(results.responseText)
    console.log("resultJSON=",newContent)
    let newerContent = ""
    if (newContent.entry_list[0].entry){
      newContent.entry_list[0].entry.forEach((item,index)=>{
        item.def.forEach((item2,index2)=>{
          item2.dt.forEach((item3,index3)=>{
            let thisDef = item3._text.replace(':','').trim()

            if (thisDef.length){
            newerContent = `${newerContent}<li>${thisDef}</li>`
          }})
        })
      })
    } else {
      newerContent = 'No entries found for that search'
    }

    console.log(newerContent)
    newerContent = `
      <strong>${this.state.MWDictKeyword}:</strong><br />
      <ul>${newerContent}</ul>`

    this.setState({MWDictContent: newerContent})
  }

createMarkup(strIn) { return {__html: strIn}; };

render(){
  console.log(this.props)
  return(
    <div>
      <script src={"%PUBLIC_URL%assets/styles/MWDictStyles.css"}></script>
      <div>
      <form onSubmit={this.handleSubmit} className="MWDictSearch" id="#MWDictSearch">
        <input
          type="text"
          placeholder="word or phrase to lookup"
          value={this.state.MWDictKeyword}
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
      <div className="MWDictContent" dangerouslySetInnerHTML={this.createMarkup(this.state.MWDictContent)} />
    </div>
    )
  }
}
export default MWDict
