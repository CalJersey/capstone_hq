import React, {Component} from "react";
import {Link} from "react-router-dom";
import {notify} from 'react-notify-toast';
import $ from "jquery-ajax";

class LoginSignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  validateForm()  {
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    if (!email || !password) {
      notify.show('Email and Password are Required','error');
      return false;
    }
    return true
  }

  handleSignup(e) {
    e.preventDefault();
    // console.log("this=",this);
    // console.log("e=",e);
    // console.log("su",document.getElementById("Signup").value)
    // console.log("li",document.getElementById("Login").value)
    if (!this.validateForm()) return false;
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    this.props.onUserSubmit({ action: 'Signup', email: email, password: password });

  }
  handleLogin(e) {
    e.preventDefault();
    // console.log("this=",this);
    // console.log("e=",e);
    // console.log("su",document.getElementById("Signup").value)
    // console.log("li",document.getElementById("Login").value)
    if (!this.validateForm()) return false;
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    this.props.onUserSubmit({ action: 'Login', email: email, password: password });

  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  renderAuthorizedContent(){
    return (
      <div className="card-content teal-text text-lighten-1">
        <span className="card-title">Welcome Back</span>
        <p>Click below to be taken to your HUH! Dashboard or to Logout.</p>
       </div>
     )
   }

   renderAuthorizedAction(){
     return(
       <div className="card-action">
         <Link to={'/dashboard/'} className="btn btn-small btn-primary"><span className="btn-small-text">Dashboard</span><i className="small material-icons">chevron_right</i></Link>
         <Link to="/logout/" className="btn btn-small btn-primary"><span className="btn-small-text">Logout</span><i className="small material-icons">chevron_right</i></Link>
       </div>
     )
   }

  renderUnauthorizedContent(){
    return (
      <div className="card-content teal-text text-lighten-1">
        <span className="card-title">Login or Signup</span>
        <p>If you already have a HUH! Dashboard, use this form to Login. If not, use it to Signup for one.</p>
        <input type="email" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} className="validate" /><br />
        <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} className="validate" /><br />
      </div>
    )
  }

  renderUnauthorizedAction(){
    return(
      <form>
        <div className="card-action">
          <button id="Signup" name="Signup" className="btn btn-small btn-primary" value="Signup" onClick={this.handleSignup}><span className="btn-small-text">Signup</span><i className="small material-icons">chevron_right</i></button>
          <button id="Login" name="Login" className="btn btn-small btn-primary" type="submit" value="Login" onClick={this.handleLogin}><span className="btn-small-text">Login</span><i className="small material-icons">chevron_right</i></button>
        </div>
      </form>
    )
  }

  render() {

    //console.log("state.isAuthenticated=",{this.state.isAuthenticated})
    let cardContent = ""
    let cardAction = ""
    if (global.config.SessionCtrl.isAuthenticated()) {
      cardContent = this.renderAuthorizedContent()
      cardAction =  this.renderAuthorizedAction()
    } else {
      cardContent = this.renderUnauthorizedContent()
      cardAction =  this.renderUnauthorizedAction()
    }

    return(
      <div className="card white lighten-1 center">
        {cardContent}
        {cardAction}
      </div>
    )
  }
}
export default LoginSignupForm;
