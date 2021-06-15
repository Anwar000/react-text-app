import React from "react"
import ReactDom from "react-dom"


class othclass extends React.Component{
    constructor(){
        super()
        this.state={
            arry:[1,2,3],
            bull: "null"
        }
    this.myarry = this.myarry.bind(this)
    this.mybull = this.mybull.bind(this)
    }
    myarry(){
        this.setState({arry:[5,6,7]})
    }
    mybull(){
        this.setState({bull:"non"})

    }
    render(){
        return(
            <div>
                <h2>{this.state.arry}</h2>
                <button onClick={this.myarry}>clikme</button>
                <h2>{this.state.bull}</h2>
                <button onClick={this.mybull}>clikme </button>

            </div>
        );
    }

}
export default othclass;