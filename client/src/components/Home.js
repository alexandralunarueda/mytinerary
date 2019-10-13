import React, {Component} from 'react';
import logo from "../imagenes/MYtineraryLogo.png";
import flecha from "../imagenes/circled-right-2.png";
import {NavLink} from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div>
                <img src={logo} alt= "logo" className ="logo" width = "300"/>
                <h1>HOME</h1>
                <h3>
                Find your perfect trip, designed by insiders who know and love their
                cities.
                </h3>
               
                <div>
                <NavLink className = "menu-item" to={"/cities"}>
                <img src={flecha} alt="flecha" className= "flecha" width ="70"/>
                </NavLink>
                </div>
            </div>
            
            
        
        );
    }
}

export default Home