import React from "react";
import TwitterSinup from "./twitterSinup";
import LoginTwitter from "./loginTwitter";
import ForgotPassword from "./forgotPassword";
import "./twitterCss.css";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      sinup: false,
      login: false,
      forPass: false,
    };
  }
  sinupdata = () => {
    
    this.setState({ login: false, forPass: false, sinup: true }, () => {
      document.getElementById("layerOn").style.display = "block"
    });
    
  };
  layerOff = () =>{
    document.getElementById("layerOn").style.display = "none"
  }
  loginData = () => {
    this.setState({ sinup: false, login: true }, () =>{
      document.getElementById("bottomlink").style.display = "block"
    }); 

    
  };

  displayForgot = () => {
    this.setState({ sinup: false, login: false, forPass: true },()=>{
      document.getElementById("passwordOverlay").style.display = "block"
    });
  };

  displaySignin = () => {
    this.setState({ login: false, forPass: false, sinup: true });
  };

  render() {
    return (
      <div  className="imageBackground">
        
        
        <div  >
             {this.state.sinup &&
                <div id="layerOn" >
                   <TwitterSinup />
                </div>
             }
        </div>
        <div>
        {this.state.login && 
          <div id="bottomlink">
            <LoginTwitter />
            <a href="#" onClick={this.displayForgot}>
              forgot Password?
            </a>
            <a href="#" onClick={this.displaySignin}>
              Sing up for Twitter
            </a>
          </div>
        }
        </div>
        

      
        
        <div className="homeLogin">
          <div>
            <img src="twitterlogo.png" alt="logo" />
          </div>
          <div className="headding">
            <h2>Happening now</h2>
          </div>
          <div className="subheadding">
            <h4>Join Twitter today.</h4>
          </div>
          
          <div>
            <button id="signupData" onClick={this.sinupdata}>
              Sign up
            </button>
          </div>
          <div>
            <button className="loginData" onClick={this.loginData}>
              Log in
            </button>
          </div>
        </div>
       
        
        
        
        {this.state.forPass && 
          <div id="passwordOverlay">
            <ForgotPassword />
          </div>
        }
      </div>
    );
  }
}
export default HomePage;
