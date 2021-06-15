import React from "react"
import ReactDom from "react-dom"
import Home from "./home"
import Arry from "./arry"
import Obj from "./obj"


class myclass extends React.Component{
    
    constructor(){
        super()
        this.state = {
            name :"anwar",
            number :8500,
            event:{
                target:{
                    name:"anwar",
                    value:""
                }
            }
            
        }
        

        this.callfunction = this.callfunction.bind(this)
        this.mynum = this.mynum.bind(this)
        

    }
     mynum(){
         this.setState({number: 8500423819})

    }
     callfunction() {
         //alert("clicked")
         this.setState({name: "shaik anwar"})
     }
   
    render(){
        
        return(
            <div>
            <h2>{this.state.name}</h2>
            <button onClick={this.callfunction}>clikme</button>
            <h3>{this.state.number}</h3>
            <button onClick={this.mynum}>clikme</button>
            <Home />
            <Arry />
            <Obj/>

            
           
            
            
            </div>
        );

    }
}
export default myclass;