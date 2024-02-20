import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
export const Adminsignin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [name]: value,
      }));
    };
  const { dispatch } = useAuth();
  const redirect = useNavigate();

  const handleSignIn = () => {
    // Validate credentials and sign in logic
    // ...

    // On successful sign-in
    dispatch({ type: 'LOGIN', payload: { username: credentials.username } });

    // Redirect to Admin dashboard or other pages
    redirect('/admindash');
  };
  
    return (
        <>
        <Navbar/>
      <div className="container mt-5 ">
        <h2>Admin Sign In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="adminUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="adminUsername"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="adminPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="adminPassword"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
      </div>
      </>
    );
  };