import React from "react"

function myfunction(){
    let x= 1;
    let y = "ashok"
    if(x%2==0){
       
        return(
        <h2>number is even</h2>
        )


    }else if(x>2){
        
        return(
            <h2>number is large</h2>
        )
    
    }
    else{
        return(
            <h2>number is odd</h2>
        )
    
    }
    
    
}
export default myfunction;