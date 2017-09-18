import React, { Component } from "react";
import LoginSignupFormContainer from './LoginSignupFormContainer';

class Splash extends Component {
  render() {
    return (
      <div>

        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
              <div className="row">
                <div className="col l4 offset-l4 m8 offset-m4 s9 offset-s3">
                  <div className="header-container">
                    <h1 className="header teal-text text-lighten-1">HUH!</h1>
                    <h5 className="header bright-pink-text"><strong>More Useful Than You Think!</strong></h5>
                  </div>
                </div>
                <div className="col l4 m9 offset-m3 s9 offset-s3">
                  <LoginSignupFormContainer />
                </div>
              </div>
              <br /><br /><br />

          </div>
          <div className="parallax" id="parallax_1"><img src="/images/hud2b.jpg" alt="Car Dashboard" /></div>
        </div>


        <div className="container">
          <div className="section">

            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Speeds up development</h5>

                  <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                  <h5 className="center">User Experience Focused</h5>

                  <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                  <h5 className="center">Easy to work with</h5>

                  <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Splash;
