import { getDefaultNormalizer } from "@testing-library/dom"
import React from "react"
import "./arryOfObject.css"

class arryItem extends React.Component{
    constructor(){
        super()
        this.state = {
            
           
            data:[
                {
                  name:"student1",
                  college:"nbkr",
                  age: 25,
                  mail:"ajdbjabd@getDefaultNormalizer.com",
                  mobile:85022335165
                },
                {
                    name:"student2",
                    college:"vit",
                    age: 24,
                    mail:"ajdbjabd@getDefaultNormalizer.com",
                    mobile:85022335165
                },
                {
                    name:"student3",
                    college:"pvr",
                    age: 23,
                    mail:"ajdbjabd@getDefaultNormalizer.com",
                    mobile:85022335165
                },
                {
                    name:"student4",
                    college:"srm",
                    age: 22,
                    mail:"ajdbjabd@getDefaultNormalizer.com",
                    mobile:85022335165
                }
            ]
                
            

        }

    }
    render(){
        return(
            <div>
                <h1>Student data :- </h1>
                <table className="studentData">
                    
                    <tr>
                        <th>name</th>
                        <th>college</th>
                        <th>age</th>
                        <th>mail</th>
                        <th>mobile</th>
                    </tr>
                    {this.state.data.map((items) =>{
                       return(
                        <tr>
                        <td>{items.name}</td>
                        <td>{items.college}</td>
                        <td>{items.age}</td>
                        <td>{items.mail}</td>
                        <td>{items.mobile}</td>

                        </tr>
                       )
                    }
                    )}
                        
                    
                    
                </table>
            </div>
        )
    }
}
export default arryItem;