import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
// import logo from "../media/msclogo.jpeg"

const Header = () => ( //functions can be components since it returns jsx
  <div id="header">
    <a id="MSC-header" href="/"> 
        <h4> The Math and Science Center </h4>
    </a>
    <div className="links">
        <Link to="/">
            <p id="link-button">Home</p>
        </Link>
        <Link to="/tutor">
            <p id="link-button">Find Tutors</p>
        </Link>
        <Link to="/how">
            <p id="link-button">How tutoring works</p>
        </Link>  
        <Link to="/material">
            <p id="link-button">Resources</p>
        </Link> 
        <Link to="/schedule">
            <p id="link-button"> Schedule </p>
        </Link>  
        <Link to="/about">
            <p id="link-button"> About the MSC </p>
        </Link>   
    </div>
  </div>
)

export default Header; 