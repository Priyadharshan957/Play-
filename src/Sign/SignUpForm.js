import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure correct import from react-router-dom
import im from "../Images/bg2.png";
import logo from "../Images/logo4.png";
import "./Sign.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); // State to handle error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nav = useNavigate(); // Ensure useNavigate is used correctly

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: formData.username, // Adjust field names to match backend expectations
          email: formData.email,
          password: formData.password,
          role: 'user' // Default role, adjust as needed
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset form data
        setFormData({
          username: '',
          email: '',
          password: ''
        });
        // Navigate to home page or any other page after successful sign-up
        nav('/');
      } else {
        // Update error state with the message from the backend
        setError(data.message || 'An error occurred during sign-up');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred during sign-up');
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${im})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="login-container">
        <form className="login-box1" onSubmit={handleSubmit}>
          <div><img src={logo} height={150} width={200} alt="Logo" /></div>
          <div className="form-group">
            <input
              className="input"
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="form-group">
            <center>
              <button className='button' type="submit">Sign Up</button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
