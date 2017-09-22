import React, { Component, PropTypes } from "react";

class MWDict extends Component {
  constructor(){
    super();
    this.state ={

    };
  }
  handleSubmit(e) {

  }
  handleKeywordChange(e) {
    this.setState({Keyword: e.target.value});
  }

  handleSubmit(e) {
    let keyword=e.keyword;
    let password=e.password;
    let ApiUrl = global.config.Env.lbApiUrl + 'Users'
    if (e.action === 'Login') {
      ApiUrl = ApiUrl + '/login'
    }
    $.ajax({
        method: "POST",
        url: ApiUrl,
        data: {
        email: email,
        password: password
      }
    }).then(res => {
      console.log("res is ", res);
      if (e.action === 'Signup'){
        global.config.SessionCtrl.setSessionKey('userId',res.id)
        let newAction = 'Login'
        let login = {email: email, password: password, action: newAction}
        this.handleSubmit(login)
      } else {
        global.config.SessionCtrl.setSessionKey('userId',res.userId)
        global.config.SessionCtrl.setSessionKey('ACCESS_TOKEN',res.id);
        global.config.SessionCtrl.setSessionKey('email',email)
        this.setState({redirect:true, userId:res.userId})
        console.log("SS",sessionStorage);
      }
    }, err => {
      console.log("err=",err)
      notify.show("An unknown error has occured",'error');
    });
  }

render(){

  return(
    <div>
      <div>
      <form onSubmit={this.handleSubmit} className="MWDictSearch" id="#MWDictSearch">
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
      <div className="MWDictContent"></div>
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
