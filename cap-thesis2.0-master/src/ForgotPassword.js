import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // Import the CSS file for styling

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the forgot password logic here
    // For demonstration, we navigate to the sign-in page
    navigate('/signin');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-left">
        <div className="logo-container">
          <img src="spclogo.png" alt="Logo" className="logo" />
          <div className="system-name">
            <span style={{ fontSize: '150px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>SIMS</span>
          </div>
        </div>
      </div>
      <div className="forgot-password-right">
        <h2>Forgot Password</h2>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
            />
          </div>
          <center><button type="submit" className="submit-button">Submit</button></center>
          <div className="back-to-signin">
            <span>Remembered your password? <a href="/signin" className="back-to-signin-link">Sign in</a></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
