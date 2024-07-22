import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Signup:', { username, email, password });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login:', { email, password });
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log('Forgot password');
  };

  return (
    <div className={`auth-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="auth-form-container">
        <div className="form-wrapper">
          <form onSubmit={handleSignup} className="signup-form">
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{' '}
              <span onClick={handleFlip} className="flip-link">
                Log in
              </span>
            </p>
          </form>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleLogin} className="login-form">
            <h2>Log In</h2>
            <input
              type="email"
              placeholder="Username/Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Log In</button>
            <p onClick={handleForgotPassword} className="forgot-password">
              Forgot password?
            </p>
            <p>
              Don't have an account?{' '}
              <span onClick={handleFlip} className="flip-link">
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;