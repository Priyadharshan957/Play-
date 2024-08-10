import React, { useState } from 'react';
import "../Login/Login.css";
import im from "../Images/bg2.png";
import logo from "../Images/logo4.png";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { database } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminLogin = () => {
    if (username === "admin" && password === "admin@123") {
      navigate("/admin"); // Navigate to Admin page
    } else {
      alert("Invalid admin credentials");
    }
  };

  const handlesign = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin@123") {
      handleAdminLogin();
    } else {
      signInWithEmailAndPassword(database, username, password)
        .then((data) => {
          console.log("fskgh", data);
          navigate("/kard");
        })
        .catch((error) => {
          alert("Invalid login credentials");
        });
    }
  };

  const fetchUserData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const userData = response.data;
        console.log("=====>>>>>>", response);
        const user = userData.find(user => user.username === username);
        if (user) {
          console.log("User found:", user);
          setError('');
          localStorage.setItem('username', username);
        } else {
          console.log("User not found");
          setError('Invalid username or password');
          alert(error || "Invalid credentials");
        }
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setError('Failed to fetch user data');
      });
  };

  const handleLogin = (e) => {
    console.log('Username:', username);
    console.log('Password:', password);
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div style={{
      backgroundImage: `url(${im})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="login-container">
        <div className="login-box">
          <img src={logo} alt="Logo" height={150} width={200} />
          <form onSubmit={handlesign}>
            <div className="form-group">
              <input
                className='input'
                type="text"
                id="username"
                placeholder='Email ID'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                className='input'
                type="password"
                id="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <button className='button' type="submit">Login</button>
          </form>
          <br />
          <br />
          <a href='' style={{ textDecoration: 'none', color: 'white' }}>Forgot Password</a>
          <a href='/sign' className='link'>New User?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;