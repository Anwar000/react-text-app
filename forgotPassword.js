import React from "react";


class passwordforgot extends React.Component{
    constructor(){
        super()
        this.state = {
            reset:"",
       }
     }
     changePassword = (event)=> {
         let a = event.target.name;
         let b = event.target.value;
        this.setState({[a]:b})
    }
    resetPassword = () => {

        if(this.state.reset == "anwar00038@gmail.com" || this.state.reset == "8500423819" || this.state.reset == "anwar shaik"){

            document.getElementById("trueOutput").style.visibility = "visible";
            document.getElementById("wrongInput").style.visibility = "hidden";
            

        }else{
            document.getElementById("wrongInput").style.visibility = "visible";
            document.getElementById("trueOutput").style.visibility = "hidden";
        } 

    } 
    render(){
        return(
            <div>
                <div id="forgotPass">
                    <div id="forgotPassHeadder">
                        <img  src="twitterlogo.png"  />
                        <h3 >Password Reset</h3>
                        <hr/>
                        
                    </div>
                    <h2> Find your twitter account</h2>
                    <label>Enter your email,phone number,or username</label><br></br><br/>
                    <input  id="resetpass" type="text" placeholder=" re-enter" value= {this.state.reset} name="reset" onChange={this.changePassword}/><br/><br/>
                    <button  id ="searchPass"onClick={this.resetPassword} >Search</button>
                    
                </div>
                <div id="trueOutput">
                    <h2>How do you want to reset your password?</h2>
                    <p>You can use the information associated with your account.</p>
                    <input type="radio" /> <p>Send an email to an**********@*****.***</p> 
                    <button>Next</button><br/>
                    <a href="#">Don’t have access to these?</a>
                </div>
                <div id="wrongInput" >
                    <h2>We couldn't find your account with that information</h2>
                    <p>Please try searching for your email, phone number or username again.</p><br/>
                    <input type= "text" /><br/>
                    <button>Search</button>
                </div>

                
               
                
                
                
            </div>
        )
    }
} 
export default passwordforgot;