import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    navigate('/signin');
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-left">
        <div className="logo-container">
          <img src="spclogo.png" alt="Logo" className="logo" />
          <div className="system-name">
          <span style={{ fontSize: '150px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>SIMS</span>
            </div>
        </div>
      </div>
      <div className="sign-up-right">
        <h2>Sign Up</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your username" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
            />
          </div>
          <center><button type="submit" className="submit-button">Sign Up</button></center>
          <div className="new-account">
            <span>Already have an account? <a href="/signin" className="create-account">Sign in</a></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
