import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminInterface.css';

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Page</h1>
      <div className="button-group">
        <button onClick={() => navigate('/choose')} className="admin-btn">
          Go Registration
        </button>
        <button onClick={() => navigate('/voting')} className="admin-btn">
          Go Voting
        </button>
        <button onClick={() => navigate('/view-result')} className="admin-btn">
          Go View Result
        </button>
      </div>
    </div>
  );
}
