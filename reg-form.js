import React from "react"
import ReactDom from "react-dom"

class userreg extends React.Component{
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            mobile:"",
            email:"",
            gender:"",
            password:"",
            repassword:"",


        }
        this.fristname = this.fristname.bind(this);
        this.lastname = this.lastname.bind(this);
        this.mymobile = this.mymobile.bind(this);
        this.mymail = this.mymail.bind(this);
        this.genderupdate = this.genderupdate.bind(this);
        this.passwordchange =this.passwordchange.bind(this);
        this.retypepassword = this.retypepassword.bind(this);
        this.changeHandler = this.changeHandler.bind(this)

    }
    fristname(event){

        this.setState({fname:event.target.value})
    }
    lastname(event){
        this.setState({lname:event.target.value})

    }
    mymobile(event){
        this.setState({mobile:event.target.value})

    }
    mymail(event){
        this.setState({email:event.target.value})

    }
    genderupdate(event){
        this.setState({gender:event.target.value})

    }
    passwordchange(event){
        this.setState({password:event.target.value})

    }
    retypepassword(event){
        this.setState({repassword:event.target.value})

    }
    changeHandler(event){
        let myname = event.target.name;
        let myvalue = event.target.value;
        
        this.setState({[myname]:myvalue} )

    }
    render(){
        return(
            <div>
                <div>
                    <form>
                        <label>Frist name</label><br></br>
                        <input type="text" value={this.state.fname} name="fname" placeholder="frist name" onChange={this.changeHandler} /><br></br>
                        <label>Last name</label><br></br>
                        <input type="text" value={this.state.lname} name="lname" placeholder="last name"  onChange={this.changeHandler}/><br></br>
                        <label>Mobile number</label><br></br>
                        <input type="text" value={this.state.mobile} name="mobile" placeholder="+91-"  onChange={this.changeHandler}/> <br></br>
                        <label>E-mail</label><br></br>
                        <input type="text" value={this.state.email} name="email" placeholder="@gmail.com" onChange={this.changeHandler} /><br></br>
                        <label> Gender</label><br></br>
                        <select value={this.state.gender} name="gender" onChange={this.changeHandler}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select><br></br>
                        <label>Password</label><br></br>
                        <input type="password" value={this.state.password} name="password" placeholder="password" onChange={this.changeHandler} /><br></br>
                        <label>Re-type password</label><br></br>
                        <input type="password"  value={this.state.repassword} name="repassword" placeholder="re-enter password" onChange={this.changeHandler} /><br></br>
                        <button onSubmit="">Submit</button>
                        
                    </form>
                    <div>
                        <h2>{this.state.fname}</h2>
                        </div>
                </div>

            </div>
        );
    }
}
export default userreg;