 import React from "react"

 class newone extends  React.Component{
     constructor(){
         super()
         this.state={
            name:0
                
            
   
        }
     }
     count = () => {this.setState({name:this.state.name+1})}

     componentWillUnmount(){
         console.log(this.state.name)
     }

     
     render(){
        return(
            <div>
                <button onClick= {this.count}>clikme</button>
                <h2>{this.state.name}</h2>
           
            </div>
        )
     }
         
         
     
 }
 export default newone;