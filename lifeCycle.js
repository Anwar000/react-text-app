import React, { Component } from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Ccomp from "./cComp"

class lifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    }
  }

 // componentDidMount() 

 // componentDidUpdate() 

  //componentWillUnmount()

  render() {
    return (
      <Router>
      <div id="componentMethod">
        <div>
          <Link to="/contact">contact</Link>
          <br/>
          <Link to ="/about">About</Link>
          <br/>
          <Link to= "/home">Home</Link>
        </div>
        <Route path="/contact" render= {() => {return <h1>Contact page</h1>}}/>
        <Route path="/home" render= {() => {return <h1>Home page</h1>}}/>
        <Route path="/about" render= {() => {return <h1>About page</h1>}}/>
      </div>
      </Router>
    );
  }
}

export default lifeCycle;
