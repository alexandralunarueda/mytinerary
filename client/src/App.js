import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Users from './components/Users';
import Header from './components/Header';



function App(){
  return(
    <div className ="App">
    
     
      <h1>APP</h1>
      
      {/* <nav>
        <ul style={navStyle}>
          
            <li> <a href="/"> Home </a></li>

            <li> <a href="/users"> Users </a></li>
        
        </ul>
      </nav> */}
      <BrowserRouter>
      <div className= "App">
        <Header/>
      <Switch>
      
      
      <Route exact path ="/" component ={Home}/>
      <Route  path ="/users" component ={Users}/>

      </Switch>
      
      </div>
      </BrowserRouter>
    </div>
  );
}
const navStyle = {
  display:"flex",
  justifyContent: "space-arround",
  listStyle: "none",
  backgroundColor:"teal",
  color: "white",
  height:"50px",
  paddingTop: "15px"

}

export default App;