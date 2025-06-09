import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import LoginPage from "./LoginPage"; // adjust path if needed
import LoginHome from "./LoginHome"; // ✅ use capital L and H
import Regestation from "./Regestation";
import RegestationCandidate from "./RegestationCandidate";
import Choose from "./Choose";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginHome />} />
        <Route path="/loginhome" element={<LoginPage />} />
       <Route path="/registration" element={<Regestation />} />
       <Route path="/registrationcandidate" element={<RegestationCandidate />} />
        <Route path="/choose" element={<Choose />} />


       
      </Routes>
    </Router>
    
  );
}

export default App;
