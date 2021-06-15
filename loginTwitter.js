import React from "react";
import TwitterSinup from "./twitterSinup"
import ForgotPassword from "./forgotPassword"
import "./loginteitter.css"


class logindata extends React.Component{
    constructor(){
        super()
        this.state= {
            sinup: false,
            forgot: false,
            userName: "",
            password: "",


        }
    }
    changeLoginData = (event) =>{
        
        
        let newuser = event.target.name;
        let mypassword =event.target.value;
        this.setState({[newuser]:mypassword});
    }
    loginHere = ()=>{
        if(this.state.userName === "anwar" && this.state.password === "anwar1204"){
            document.getElementById("twitLogin").style.visibility = "visible";

        }else{
            alert("enter deatils")
        }
       
       
        
    }
     changeHnadle = () =>{
         this.setState({sinup: true})
         this.setState({forgot:false})

         
         
     }
     changepassword =() =>{
        this.setState({forgot:true})
        this.setState({sinup:false})
       
     }
    render(){
        return(
            <div>
                <div className="loginPage">
                    <img 
                    classname ="imagelogoData"
                    src="twitterlogo.png" alt="logo" />
                    <h1> Log in to Twitter</h1>
                    <input id ="userNameStyle"type="text" placeholder="Phone,email,or username"  value={this.state.userName} name="userName" onChange={this.changeLoginData}/><br/><br/>
                    <input id="passwordStyle" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.changeLoginData} /><br/><br/>
                    <button id="sumbitButton" classname="loginData" onClick={this.loginHere}>Log in</button>
                    

                </div>
                
                <div id="twitLogin">
                <h2>welcome to Twitter</h2>
                </div>
                

            </div>
        )
    }
}
export default logindata;