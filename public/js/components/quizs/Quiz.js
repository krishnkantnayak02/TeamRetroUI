import React from 'react';


export default class Quiz extends React.Component{
   
 constructor(props){
     super(props);
     this.state = {secondsElapsed: 0, timerRunning: false, next : false, questionId : 0}
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
      timerRunning: false
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
      console.log(">>>krishnkant", this.state.questionId)
  }

  render(){

    const data = [{
      "id" : 1,
      "question" : "Here are some words translated from an artificial language.gorblflur means fan belt pixngorbl means ceiling fan arthtusl means tile roof Which word could mean ceiling tile ?",
      "ans" : "pixnarth"
  },
  {
    "id" : 2,
    "question" : "what is your name what is your name what is your name what is your name  what is your name what is your name what is your name",
    "ans" : "Ramakant"
},
{
  "id" : 2,
  "question" : "what is your name what is your name what is your name what is your name  what is your name what is your name what is your name",
  "ans" : "kk"
}]

  const timmer = <div  style = {{marginRight : '20px'}} className="text-right">
                                <h1 style = {{fontSize : '70px', color:'Blue'}}>{this.getMinutes()}:{this.getSeconds()}</h1>
                              
                                      {(!this.state.timerRunning) 
                                        ? <button type="button" onClick={this.handleStartClick}>start</button>
                                        : <button type="button" onClick={this.handleStopClick}>Right Answer</button>
                                      }

                                {/* {(this.state.timerRunning || this.state.secondsElapsed !== 0)
                                  ? <button type="button" onClick={this.handleResetClick}>reset</button>
                                  : null
                                } */}
                                 
                                {(this.state.next ) ?  <div style = {{marginRight : '20px'}} className="text-right" > <button type="button" className="btn btn-success" onClick = {this.handleResetClick} >Next Question</button></div>  : null }
                             </div>

                  const ansDiv = <div className="container" >
                                    <h2 style = {{color : 'green'}} >Answer Is</h2>
                                        <div  className="panel panel-default">
                                            <div  className="panel-body">{data[this.state.questionId].ans}</div>
                                        </div>
                                    </div>
   const finalDiv =  (this.state.questionId < 2) ? <img src = "static/img/Time-Out1.jpg" className = "img-responsive center-block" /> : <img src = "static/img/finalImage.jpg" className = "img-responsive center-block" style = {{height : '300px'}} />

    
    {
        return (this.state.secondsElapsed < 5)  && (this.state.questionId < 2)
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
           {(!this.state.timerRunning) ? <div>{ansDiv}</div> :null}
        </div>
         : 
         <div>
         {finalDiv} 


       <div style = {{marginRight : '20px'}} className="text-right" >
        {(  this.state.secondsElapsed > 4 && (this.state.questionId < 2))
            ? <button type="button" className="btn btn-success" onClick = {this.pageRecall.bind(this)}>Next Question</button>
            : null
          }
          </div>
          {!(this.state.secondsElapsed < 5) && (this.state.questionId < 2) ? <div> {ansDiv} </div> : null}
        </div>;
      }
  }
}