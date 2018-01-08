import React  from 'react'
import  {render} from 'react-dom'
import Header from './js/components/Header'

class Index extends React.Component {
        render() {
            return (
                <div>
         <Header teamname  = "Compozed Lab India Team Retro"  tagline = "this is team activity!"/>
        </div> 
            );
        }
    }
    render( <Index /> ,document.getElementById("root"))
    

   
