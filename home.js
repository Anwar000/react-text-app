import React from 'react'
import ReactDOM from 'react-dom'


class newclass extends React.Component{
    constructor(){
        super()
        this.state={
            name: "ashok",
            value: "raja",
            phone: 8985890850
        }
    this.myfun = this.myfun.bind(this)
    this.raja = this.raja.bind(this)
    this.phone = this.phone.bind(this)

    }
    myfun(){
        this.setState({name:"ashok kumar"})
    }
    raja(){
        this.setState({value:"raja kota"})

    }
    phone(){
        this.setState({phone:8985890830})
    }
    render(){
        return(
        <div>        
            <h2>{this.state.name}</h2>
            <button onClick={this.myfun}>clikme</button>
            <h2>{this.state.value}</h2>
            <button onClick={this.raja}>clikme</button>
            <h2>{this.state.phone}</h2>
            <button onClick={this.phone}>clikme</button>
        </div>
        );

    }


}
export default newclass;