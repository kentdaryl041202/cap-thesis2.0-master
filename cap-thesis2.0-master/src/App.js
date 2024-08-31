import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
import ForgotPassword from './ForgotPassword';
import AdminDashboard from './dashboard';
import ManageUser from './ManageUser';
import ManageItem from './components/ManageItem';
import HomePage from './pages/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="App">
    {userName}
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={isLoggedIn ? (
              <HomePage />
            ) : (
              <Navigate to="/signin" />
            )}
          />
          <Route 
            path="/signin" 
            element={<SignIn onLogin={handleLogin} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp />} 
          />
          <Route 
            path="/forgot-password" 
            element={<ForgotPassword />} 
          />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? (
              <AdminDashboard handleLogout={handleLogout} />
            ) : (
              <Navigate to="/signin" />
            )}
          />
          <Route 
            path="/manage-item" 
            element={isLoggedIn ? (
              <ManageItem />
            ) : (
              <Navigate to="/signin" />
            )}
          />
          <Route 
            path="/manage-user" 
            element={isLoggedIn ? (
              <ManageUser />
            ) : (
              <Navigate to="/signin" />
            )}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
