import React from "react"
import Home from "./home"
import RegFrom from "./regFrom"

class logIn extends React.Component{
    constructor(){
        super()
        this.state={
            username: "",
            password:"",
            data:[1,2,3,4,5,6,7,8]
        }
        this.userLoginChange = this.userLoginChange.bind(this);
        this.userInput = this.userInput.bind(this)
        
    }
    userLoginChange(event){
        let myuser = event.target.name
        let mypassword = event.target.value
        this.setState({[myuser]:mypassword})
    }

    changeHandle = () => {
        let a= ["ass", "sdsd", "sdsfsd"]
      let b =   a.map((i)=>{
            return(
                <h2>fristname:{i}</h2>
            )

        })
        return b

    }
    
    userInput(e){
        e.preventDefault()
        if(this.state.username1!= "" || this.state.password!= ""){
            //alert("enter deatils")
            document.getElementById("homePage").style.visibility = "visible"
            document.getElementById("loginDeatils").style.visibility = "hidden"

        }
        

    }
   
    
    render(){
        return(
            <div >
                <div id="loginDeatils">
                <form className="userLogin">
                    <img src ="User.jpg" alt="loginimage"  /><br></br>
                    <hr /><br></br>
                    
                    <input type="text" placeholder="username"  value={this.state.username} name="username" onChange={this.userLoginChange}/><br></br>
                    
                    <input type="password" placeholder="password" value={this.state.password} name="password"  onChange={this.userLoginChange}/><br></br>
                    <button onClick={this.userInput}>Submit</button>
                </form>
                </div>
                <div id="homePage">
                  < RegFrom />
                </div>
                <div>
                    {this.state.data.map((items) => {
                        return (<h1>array elements are: {items}</h1>)
                    })}
                </div>
                <div>
                    {this.changeHandle()}
                </div>
            </div>
        );
    }
}
export default logIn;



