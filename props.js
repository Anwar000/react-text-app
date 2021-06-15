import React from "react"
import ReactDom from "react-dom"

function myprops(props){
    
    
    
        return(
            <div>
                <h2>{props.x}</h2>
                <h2>{props.y}</h2>
                <p>{props.data.name}</p>
            </div>
        );
}




export default myprops;