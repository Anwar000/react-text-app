import React from "react"
import ReactDom from "react-dom"


class myRegFrom extends React.Component{
    constructor(){
        super()
        this.state={
            fristName:"",
            lastName:"",
            mobileNumber:"",
            gmail:"",
            gender:"",
            password:"",
            reEnterPassword:"",
            dataDisplay: false

          
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.userdata = this.userdata.bind(this)


    }
    changeHandler(event){
        let displayName = event.target.name
        let displayvalue =event.target.value
        this.setState({[displayName]:displayvalue})

    }
    userdata(e){
        //e.preventDefault()
        document.getElementById("userinput").style.visibility = "visible"
       
    }
    render(){
        return(
            <div className="fromstyle">
                
                <div id="imageHeadder">
                <h2>Regestration From</h2>
                <img className="circular--square" src= "User.jpg" alt="user icon"  width="100px" height="100px" />
                </div><br></br>
                
                    <label>Frist name: </label>
                    <input type="text" value={this.state.fristName} name="fristName" onChange={this.changeHandler} /><br></br>
                    <label>Last name:</label>
                    <input type="text"  value={this.state.lastName} name="lastName" onChange={this.changeHandler} /><br></br>
                    <label>Mobile Number:</label>
                    <input type="text" value={this.state.mobileNumber} name="mobileNumber" onChange={this.changeHandler} /><br></br>
                    <label>Email:</label>
                    <input type="text" value={this.state.gmail} name="gmail" onChange={this.changeHandler} /><br></br>
                    <label>Gender:</label>
                    <select value={this.state.gender} name="gender" onChange={this.changeHandler}><br></br>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select><br></br>
                    <label>Password:</label>
                    <input type="password" value={this.state.password} name="password" onChange={this.changeHandler} /><br></br>
                    <label>Re Enter Password:</label>
                    <input type="password" value={this.state.reEnterPassword}  name="reEnterPassword" onChange={this.changeHandler}/><br></br>
                    <button onClick={this.userdata}>Submit</button>
                    

                
                <div id="userinput">
                    <h2>Frist name is:{this.state.fristName}</h2>
                    <h2>Last name is:{this.state.lastName}</h2>
                    <h2>mobile Number:{this.state.mobileNumber}</h2>
                    <h2>Email:{this.state.gmail}</h2>
                    <h2>Gender is:{this.state.gender}</h2>
                </div>

            </div>
        );
    }

}
export default myRegFrom;
