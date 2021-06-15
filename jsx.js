import React from "react"

const hello = (props) => {
    const {name,age,location } = props;
    return(
        <div>
       
           <h1>name :{name}</h1> 
           <h2>age :{age}</h2>
           <h3>location: {location}</h3>
            
       
    </div>
    )


    

}

   
    
     
export default hello;