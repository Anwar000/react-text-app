import React from "react"
import axios from "axios";



class axiosPostCall extends React.Component {
    constructor() {
        super();
       this.state = {
           userId:"",
           id:"",
           title:"",
           body:"",
        
       }
        
    }

    sendData = (event)=>{
        
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state);
        
        
        
    }
    changeHandle =(e)=>{
        e.preventDefault()
        //console.log(this.state);

        axios.post("https://jsonplaceholder.typicode.com/posts ", this.state)
        .then(response=>{
            //console.log(response);
            console.log(response.data,"post");
            alert("sucess")
        })
        .catch(()=>{
            alert("error sending data")
        })

    }
    
    render() {
        return (
            <div >
                <form onSubmit={this.changeHandle}>
                <input type="text" name ="userId" placeholder="userid" value={this.state.userId} onChange={this.sendData}/><br/>
                <input type="text" name="id" placeholder="id" value={this.state.id} onChange={this.sendData}/><br/>
                <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.sendData}/><br/>
                <input type="text " name="body" placeholder="body" value={this.state.body} onChange={this.sendData}/><br/>
                <button >submit</button>
                </form>
                
            </div>
        );
    }
}

export default axiosPostCall;