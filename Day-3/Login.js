import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

// import images from './images.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., make an API call to verify credentials)
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
       
    
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
        </div>
        <nav>
            <Link to="Home">
                <button type="submit">Login</button>

            </Link>
        </nav>
      </form>
        <a href=''>Forgot Password?</a>  <a href=''>Sign Up</a>
            
    </div>
  );
};

export default LoginPage;
