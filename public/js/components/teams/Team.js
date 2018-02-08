import React from 'react'

class Team extends React.Component{
    render(){
        const team = [
            {"id " : 1,
            "name" : "team A" },
            {"id " : 2,
            "name" : "team B" }
    ]
        console.log("board")
        return(
            <div >
                <nav className="navbar navbar-light bg-light text-right">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {(values) => {team.name}}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </nav>

                         {team.map((team) => 
                        <div className="media text-left">
                        <img className="align-self-start mr-3" src="static/img/Time-Out1.jpg" alt="Generic placeholder image" style = {{height : '64px', width : '64px'}} />
                        <div className="media-body">
                          
                          <p>  {team.name} </p>
                          
                        </div>
                      </div>
                            
                          
                            
                           
                            )} 

                      
            </div>
        )
    }
}

export default Team;