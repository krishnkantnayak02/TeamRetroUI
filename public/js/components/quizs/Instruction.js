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
                              <div className="text-center ">
                                <p style={{color: "red" , fontSize : "30px"}}>Instructions For Quiz</p>
                                <br/>  <br/>
                              </div>
                                </div>
                                <div>
                                <p style={{fontSize : "20px"}} className="text-center">Quiz is Containing 20 questions and for each question time is 15second . </p>
                                <br/>
                                <p style={{fontSize : "20px"}} className="text-center">Questions are not objective type. </p>
                                  <br/>
                                <p style={{fontSize : "20px"}} className="text-center">Left aligned text on viewports sized </p>
                                  <br/>
                                <p style={{ fontSize : "20px"}} className="text-center">Left aligned text on viewports sized </p>
                                  <br/>
                                </div>

                                <div className="text-center">
                                  <br/>
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
