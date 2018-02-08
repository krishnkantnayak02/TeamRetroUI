import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Home from './Home'
import About from './About'
import './main.css'
import Modal from 'react-responsive-modal'


class Header extends React.Component{
    constructor(props){
        super();
        this.state = { showModal : false}
        
    }

    render(){
        var img = {
           width:'100px',
           height : '100px'
        }
    //     var modelDialog = (this.state.showModal ) ?   <div>
    //                                                   <Modal  open={this.state.showModal}  little>
    //                                                   <h3>hi gi</h3>

                                                     
    //                                                   </Modal>
    // </div> : <div></div>
     
        return(
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-2">
                <img src = "/static/img/teamlogo.jpg"  style = {img}/>
                 </div>
                <div className="col-md-8 :first-child">
                 <h1>{this.props.headerData.heading}</h1>
                 <h4>{this.props.headerData.tagline}</h4>
              
                </div>
                <div className="col-md-2">
                {/* <a>signout</a> */}
                </div>  
            </div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">Team </a>
                </div>
                <ul className="nav navbar-nav">
                  <li ><a href="/home">Home</a></li>
                  <li><a href="/board" onClick={() => this.setState({showModal: true})} >Create Board</a></li>
                  <li><a href="/team">Create Team</a></li>
                  <li><a href="/quiz">Create Quiz</a></li>
                  <li><a href="/about">About</a></li>
                </ul>
                <div className="btn-group" role="group">
                {/* <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                  <span className="caret"></span>
                </button> */}
                {/* <ul className="dropdown-menu">
                  <li><a href="#">Dropdown link</a></li>
                  <li><a href="#">Dropdown link</a></li>
                </ul> */}
                
              </div>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
              </div>
            </nav> 
           {/* {modelDialog} */}
          </div>
        )
    }
}

export default Header;