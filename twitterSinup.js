import React from "react"

class sinupdata extends React.Component{
    constructor(){
        super()
        this.state = {
            myName :"",
            myMobile :"",
            dob : "",
        }

    }
    twitterSinupData = (event) =>{
        let changeName = event.target.name;
        let changeValue = event.target.value;
        this.setState({[changeName]:changeValue})
    }
    sinupFrom = () => {
        if(this.state.myName === "anwar" && this.state.myMobile === "8500423819" ){

            document.getElementById("sinupform").style.visibility = "visible"
        }else{
            alert("you are enter worng input");
        }
        
    }
    render(){
        return(
            
            <div className="singupMainpage">
                <div >
                    <img className="sinuplogo" src="twitterlogo.png" />
                    <button id="nextbutton" onClick={this.sinupFrom}>Next</button>
                </div>
                <h1>Create your acount</h1>
                <input  id="nameBorder" type="text" placeholder="Name"  value={this.state.myName} name="myName" onChange= {this.twitterSinupData}/><br/><br/>
                <input id="phoneBorder" type="text" placeholder="Phone" value={this.state.myMobile} name="myMobile" onChange= {this.twitterSinupData} /> <br/><br/>
                <a href="">Use email instead</a><br></br>
                <h3> Date of birth</h3>
                <p>This will not be shown publicly.confirm your own age,even if this account is for 
                    a busines,a pet, or something else
                </p>
                <input type="date" value={this.state.dob} name="dob" onChange= {this.twitterSinupData} />
                <div id= "sinupform">
                    <h2>Customize your experience</h2>
                    <h3>Track where you see Twitter content across the web</h3>
                    <p>Twitter uses this data to personalize your experience. 
                        This web browsing history will never be stored with your name, 
                        email, or phone number.</p> <input type="checkbox" />
                    <p>For more details about these settings, visit the<a href="#">Help Center.</a></p>

                </div>

            </div>
        )
    }

}
export default sinupdata;