import React  from 'react'
import  {render} from 'react-dom'
import Header from './js/components/Header'
import About from './js/components/About'
import Board from './js/components/Board'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Home from './js/components/Home';
import Team from './js/components/Team'
import QuizInstruction from './js/components/quizs/Instruction'

class Index extends React.Component {
  

     openAlert(){
         alert("This is test!")
     }
        render() {
             var headerData = {
                 "heading" : "CompoZed Quiz",
                 "tagline" : "Team activities!"
             }

             const MyProductPage = (props) => {
                return (
                  <Board 
                     openAlert = {this.openAlert}
                    
                  />
                );
              }

            return (
                    <div>
                        <Header headerData = {headerData}/>
                       <Router history = {browserHistory}>
                        <Route path = "/" component = {Home} />
                                
                                <Route path = "/home" component = {Home}/>
                                {/* <Route path = "/board" component = {MyProductPage} /> */}
                                <Route path = "/board"  component={() => <Board openAlert = {this.openAlert} />} />
                                <Route path = "/team" component = {Team} />
                                <Router path = "/quiz" component = {QuizInstruction} />
                                <Router path = "/about" component = {About} />
                       </Router>
                    </div>
                   );
        }
    }
    render( <Index /> ,document.getElementById("root"))
    

   
