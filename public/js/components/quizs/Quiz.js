import React from 'react';


export default class Quiz extends React.Component{

 constructor(props){
     super(props);
     this.state = {secondsElapsed: 0, timerRunning: false, next : false, questionId : 0, flag : false, toggleForTimeOut: false}
     this.getSeconds = this.getSeconds.bind(this)
     this.getMinutes = this.getMinutes.bind(this)
     this.handleStartClick =this.handleStartClick.bind(this)
     this.handleStopClick = this.handleStopClick.bind(this)
     this.handleResetClick = this.handleResetClick.bind(this)
     this.incrementer = this.incrementer


 }

 componentDidMount(){
   console.log("in side components did mount")
   this.handleStartClick()
 }


 getSeconds(){
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
 }

 getMinutes(){
    return Math.floor(this.state.secondsElapsed / 60);
 }

 handleStartClick(){
    var _this = this;

    this.setState({ timerRunning: true });
    this.incrementer = setInterval(function () {
      _this.setState({ secondsElapsed: (_this.state.secondsElapsed + 1) });
    }, 1000)
 }

 handleStopClick(){

 clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer,
      timerRunning: false,
      flag : false
    });

    this.setState({next : true})

  }

  handleResetClick() {
    this.setState({ secondsElapsed: 0 , timerRunning : false,lastClearedIncrementer: this.incrementer,});
    this.handleStartClick()
    this.pageRecall()

  }

  pageRecall(){
      this.setState({secondsElapsed : 0})
      this.setState({questionId : this.state.questionId + 1})
      this.setState({toggleForTimeOut: false})
  }

  stop(){
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer,
      timerRunning: false
    });

    this.setState({flag : true})
  }
rightAnsTimeOut(){
  this.setState({toggleForTimeOut: true})
}
  render(){

    const data = [{
      "id" : 1,
      "question" : "Here are some words translated from an artificial language.gorblflur means fan belt pixngorbl means ceiling fan arthtusl means tile roof Which word could mean ceiling tile ?",
      "ans" : "pixnarth"
  },
  {
    "id" : 2,
    "question" : "If A + B means A is the brother of B; A - B means A is the sister of B and A x B means A is the father of B. Which of the following means that C is the son of M?",
    "ans" : "M x N - C + F"
},
{
  "id" : 3,
  "question" : " Deepak said to Nitin, That boy playing with the football is the younger of the two brothers of the daughter of my father's wife. How is the boy playing football related to Deepak?",
  "ans" : "Brother"
}
,
{
  "id" : 4,
  "question" : " Which cannot directly cause a thread to stop executing?",
  "ans" : "Calling notify() method on an object."
},
{
  "id" : 5,
  "question" : "  This country contributes $1 mn to UN Development Partnership Fund.",
  "ans" : "India"
},
{
  "id" : 6,
  "question" : "test",
  "ans" : "test"
}]

  const timmer = <div  style = {{marginRight : '20px'}} className="text-right">
                                <h1 style = {{fontSize : '70px', color:'Blue'}}>{this.getMinutes()}:{this.getSeconds()}</h1>

                                      {(!this.state.timerRunning)
                                        ? <button type="button" onClick={this.handleStartClick}>start</button>
                                        : <button type="button" onClick={this.handleStopClick}>Right Answer</button>
                                      }
                                  <br/><br/><br/><br/>
                                {(this.state.timerRunning || this.state.secondsElapsed !== 0)
                                  ? <button type="button" className="btn btn-danger" onClick={this.stop.bind(this)}>Stop</button>
                                  : null
                                }
                              <br/><br/>
                                {(this.state.next ) ?  <div style = {{marginRight : '20px'}} className="text-right" > <button type="button" className="btn btn-success" onClick = {this.handleResetClick} >{this.state.questionId < 4 ? "Next Question" :"Finish"}</button></div>  : null }

                             </div>

                  const ansDiv = <div className="container" >
                                    <h2 style = {{color : 'green'}} >Answer Is</h2>
                                        <div  className="panel panel-default">
                                            <div  className="panel-body">{data[this.state.questionId].ans}</div>
                                        </div>
                                    </div>
   const finalDiv =  (this.state.questionId < 5) ? <img src = "static/img/Time-Out1.jpg" className = "img-responsive center-block" /> : <img src = "static/img/finalImage.jpg" className = "img-responsive center-block" style = {{height : '300px'}} />


    {
        return (this.state.secondsElapsed < 11)  && (this.state.questionId < 5)
        ?

        <div className="container">
                 <div className="row">
                 <div className="col-sm-9 col-md-6 col-lg-8"  style = {{background : '#ffe6e6'}}>
                 <p className="text-center" style = {{fontSize : '30px' , color : 'black'}}> {"Q"+data[this.state.questionId].id +"-  " + data[this.state.questionId].question}</p>
                 </div>
                 <div className="col-sm-3 col-md-6 col-lg-4" >
                   {timmer}
                 </div>
               </div>
           {((!this.state.timerRunning) && (!this.state.flag)) ? <div>{ansDiv}</div> :null}
        </div>
         :
         <div>
         {finalDiv}


       <div style = {{marginRight : '20px'}} className="text-right" >
        {(  this.state.secondsElapsed > 9 && (this.state.questionId < 5))
            ? <button type="button" className="btn btn-success" onClick = {this.pageRecall.bind(this)}>{this.state.questionId < 4 ? "Next Question" :"Finish"}</button>
            : null
          }
          </div>

           <div className = "text-center" ><button type="button" className="btn btn-success" onClick={this.rightAnsTimeOut.bind(this)}>Right Ans</button></div>
          {(this.state.toggleForTimeOut) ? <div> {ansDiv} </div> : null}
        </div>;
      }
  }
}
