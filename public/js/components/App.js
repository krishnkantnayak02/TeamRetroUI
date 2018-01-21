import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Prompt,
  Switch
} from 'react-router-dom'

const Home = () => (
  <h1>Home</h1>
)


const NotFound = () => (
  <h1>NotFound</h1>
)



const About = () => (
  <h1>About</h1>
)



const App = () => (
  <Router>
  
   <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/content" component={Content} />
      <Route path="/form" component={Form} />
    
   
    
    </div>
  </Router>
)

export default App;
