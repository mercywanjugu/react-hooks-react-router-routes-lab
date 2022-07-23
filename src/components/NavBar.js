import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "200px",
        padding: "12px",
        margin: "0 12px 12px",
        background: "purple",
        textDecoration: "none",
        color: "white",
      };

  return (
    <div className="navbar">
    <NavLink to="/" style={linkStyles} >
         Home
     </NavLink> 
     <NavLink to="/movies" style={linkStyles}>
         Movies
     </NavLink> 
     <NavLink to="/directors" style={linkStyles}>
         Directors
     </NavLink> 
     <NavLink to="/actors" style={linkStyles}>
         Actors
     </NavLink> 
    </div>
   );
}

export default NavBar;
