import React, { Component } from "react";
im
import "../App.css";
import login from "../imagenes/iconopersona.png";

class Header extends Component {
    render(){
        return (
            <div>
                 <img src={login} alt= "login" className ="login" width = "100"/>
                 <nav>
        <ul>
          
            <li> <a href="/"> Home </a></li>

            <li> <a href="/users"> Users </a></li>
        
        </ul>
      </nav>
            </div>
        );
    }
}
    
export default Header;