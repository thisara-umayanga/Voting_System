// LoginHome.js
import React from "react";
import "./loginHome.css";
import { Link, useNavigate } from "react-router-dom";

//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';


const LoginHome = () => {
  const navigate = useNavigate();

  return (
     
    
    <div className="container">
      <br/><br/><br/>
     
      <h1 className="title">මැතිවරණ කොමිෂන් සභාව<br/>Election Commission</h1>
   
     
      <br/><br/><br/><br/><br/>
      <div className="button-box">
        <button className="lang-btn" onClick={() => navigate("/loginHome")}>
          පිවිසෙන්න<br />Login
        </button>
        
        <button className="lang-btn" onClick={() => navigate("/loginHome")}>
          ප්‍රතිඵල<br />Result
        </button>
      </div>

       

      <div className="footer">
        &copy; 2025 Election Commission of Sri Lanka
      </div>
    </div>

    
  );
};

export default LoginHome;
