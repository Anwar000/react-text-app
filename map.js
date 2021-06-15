import React from "react"


class arry extends React.Component{
    constructor(){
        super()

    }
    arryOfObeject =()=>{
        let one = [{name:"anwar",value:"true"},{fristname:"shaik",lastname:"aashiqui"}]
        one.map((item)=>{
            return(<h2>data:{item}</h2>)
        })
    }
    render(){
        return(
            <div>
                {this.arryOfObeject()}
            </div>
        )
    }
}
export default arry;