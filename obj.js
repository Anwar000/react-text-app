import React, { useDebugValue } from "react"
import ReactDom from "react-dom"

class objclass extends React.Component{
    constructor(){
        super()
        this.state={
            num:1,
            arry: {name:"ashok", age:26}
        }
        this.myobject= this.myobject.bind(this) 
    }
    myobject(){
        this.setState({arry:{age:25}})
    }
    render(){
        return(
            <div>
                <h2>{this.state.arry.age}</h2>
                <button onClick={this.myobject}>clikme</button>

            </div>
        );
    }

}
export default objclass;