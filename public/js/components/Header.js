import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Home from './Home'
import About from './About'
import './main.css'


class Header extends React.Component{
    constructor(props){
        super();
    }

    render(){
        var img = {
           width:'100px',
           height : '100px'
        }
     
        return(
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-2">
                <img src = "/static/img/teamlogo.jpg"  style = {img}/>
                 </div>
                <div className="col-md-8 :first-child">
                 <h1>{this.props.teamname}</h1>
                 <h4>{this.props.tagline}</h4>
                
                </div>
                <div className="col-md-2">
                <a>signout</a></div>  
            </div>
          </div>
        )
    }
}

export default Header;