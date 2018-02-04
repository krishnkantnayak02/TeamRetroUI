import React from 'react';
import Quiz from './Quiz'


export default class Instruction extends React.Component{
  constructor(){
    super();
    this.state = {
       toggle : "instruction"
    }
    this.instruction = this.instruction
  }

  

  openQuiz(){
   this.setState({toggle : "quiz"})
  }
  render(){
      this.instruction = <div> <div className="row">
                              <div className="col-md-6 col-md-offset-5">
                                <p style={{color: "red" , fontSize : "20px"}}>Instruction For Quiz</p>
                                
                              </div>
                                </div>
                                <div>
                                <p className="text-center">Left aligned text on viewports sized </p>
                                <p className="text-center">Left aligned text on viewports sized </p>
                                <p className="text-center">Left aligned text on viewports sized </p>
                                <p className="text-center">Left aligned text on viewports sized </p>
                                </div>
                                
                                <div className="text-center">
                                <button type="button" className="btn btn-primary" onClick = {this.openQuiz.bind(this)}>Got It! Start Quiz </button>
                         </div>
                         </div>
     

    switch(this.state.toggle){
      case "instruction" : 
      return <div>{this.instruction}</div>
      case "quiz" :
      return <div><Quiz  />
           
      </div>
    }

      
  }
}