import React from 'react'

class Board extends React.Component{
    constructor(props){
        super()
    }
    render(){
        console.log("board", this.props)
        return(
            <div>
               Board
             <button onClick = {this.props.openAlert} >Click me</button>
            </div>
        )
    }
}

export default Board;