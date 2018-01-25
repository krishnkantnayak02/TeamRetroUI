// import React  from 'react'
// import  {render} from 'react-dom'
// import Header from './js/components/Header'
// import About from './js/components/About'
// import Board from './js/components/Board'
// import {Router, Route, browserHistory, IndexRoute} from 'react-router'
// import Home from './js/components/Home';
// import Team from './js/components/Team'
// import User from './js/components/User'
// import '../public/js/components/user.css'

// class Index extends React.Component {
  

//      openAlert(){
//          alert("This is test!")
//      }
//         render() {
//              var headerData = {
//                  "heading" : "CompoZed Lab Team Retro",
//                  "tagline" : "Team activities!"
//              }

//              const MyProductPage = (props) => {
//                 return (
//                   <Board 
//                      openAlert = {this.openAlert}
                    
//                   />
//                 );
//               }

//             return (
//                     <div>
//                         <Header headerData = {headerData}/>
//                        <Router history = {browserHistory}>
//                         <Route path = "/" component = {Home} />
                                
//                                 <Route path = "/home" component = {Home}/>
//                                 {/* <Route path = "/board" component = {MyProductPage} /> */}
//                                 <Route path = "/board/:id"  component={() => <Board openAlert = {this.openAlert} />} />
//                                 <Route path = "/team" component = {Team} />
//                                 <Router path = "/about" component = {About} />
//                                 <Route path = "/signup" component = {User} />
//                        </Router>
//                     </div>
//                    );
//         }
//     }
//     render( <Index /> ,document.getElementById("root"))
    
import {createStore , combineReducers, applyMiddleware} from 'redux'

import { createLogger } from 'redux-logger'


const mathReducer = (state = {
    result : 1,
    lastValues : [],
    username : "MAX"
}
, action) => {
     switch (action.type){
        case  "ADD" :
         state = { 
             result : state.result + action.payload ,
             lastValues: [state.lastValues, action.payload],
             username : state.username
         };
         
           break;
        case "SUBTARCK" :
        state = { 
            result : state.result - action.payload ,
            lastValues: [state.lastValues, action.payload]
        };
       
        break;
        default :
        return state = state 

     }
     return state;
    
}

const userReducer = (state  = {
    name : "Max",
    age : 27
}, action) => {
  switch (action.type){
      case "SET_NAME" : 
      state = {
          name : action.payload
      }
      break;
      case  "SET_AGE" : 
      state = {
       age : action.payload
      }
      break;
      default : 
      state : state
  }
  return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action " ,  action)
    next(action);
}

const store = createStore(combineReducers({mathReducer, userReducer}),
                  {}, applyMiddleware(myLogger, createLogger()))

store.subscribe(() => {
    // console.log("store update" , store.getState())
})

store.dispatch({
    type : "ADD", 
    payload : 100
})

store.dispatch({
    type : "SUBTARCK", 
    payload : 50
})

store.dispatch({
    type : "MULTIPLY", 
    payload : 50
})
  
store.dispatch({
    type : "SET_NAME" ,
    payload : "krishnknt"
})
store.dispatch({
    type : "SET_AGE" ,
    payload : "25"
})
