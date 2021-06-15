
import React, { Component } from 'react';
import {BrowserRouter as Router, Link,Route} from "react-router-dom"

class reactRouter extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <Router>
            <div>
                <h1>React Router</h1>
                <div>
                    <Link to="/home">HOME</Link><br/>
                    <Link to="/about">ABOUT</Link><br/>
                    <Link to="/course">COURSE</Link><br/>
                    <Link to="/deatils">DEATILS</Link><br/>
                    <Link to="/more"> MORE</Link>
                </div>
                <div>
                    <Route  path="/home" render={()=>{return <h2>home data</h2>}}/>
                    <Route  path="/about" render={()=>{return <h2>about my self</h2>}}/>
                    <Route path="/course" render={()=>{return <h2>deatils about your course</h2>}}/>
                    <Route path="/deatils" render={()=>{return <h2>deatils about user</h2>}}/>
                    <Route path="/more" render={()=>{return <h2>more information about course</h2>}}/>

                </div>

                
            </div>
            </Router>
        );
    }
}

export default reactRouter;