import React from "react";
import axios from "axios"

class example extends React.Component {
  constructor() {
    super();
    this.state = {
      userData:[],
      name:"",
    }


      
  }
  
  getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/")
    .then(response => {
      console.log(response,"get");
      this.setState({userData:response.data})
     // console.log(this.state.userData);
    })
    .catch(() =>{
      alert('Error Occured')
    })
  }
  

  render() {
    return (
      <div>
        <button onClick = {this.getData}>Get data</button>
        <table>
          <tr>
            <th>id</th>
            <th>userId</th>
            
            <th>body</th>
            <th>title</th>
            

          </tr>
        {this.state.userData.map((item)=>{

          return(
            <tr>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              
              <td>{item.body}</td>
              <td>{item.title}</td>
            </tr>

          )

        })} 

        </table>
        
      </div>
    );
  }
}
export default example;
