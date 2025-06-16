import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally: validate login credentials here

    // ✅ Navigate to AdminInterface page
    navigate("/admininterface");
  };

  return (
    <div className="login-container">
      <h1 className="title">මැතිවරණ කොමිෂන් සභාව<br/>Election Commission</h1>
     
      <div className="login-box">
       
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="පරිශීලක නාමය / Username"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="මුර පදය / Password"
            required
          />
          <button type="submit" className="lang-btn">
            Login
          </button>
        </form>
      </div>

      <footer className="footer">
        &copy; 2025 Election Commission of Sri Lanka:
      </footer>
    </div>
  );
};

export default LoginPage;
