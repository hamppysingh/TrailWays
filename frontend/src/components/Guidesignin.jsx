import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../Hooks/AuthContext';
export const Guidesignin = () => {
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

    // Redirect to guide dashboard or other pages
    redirect('/guidedash');
  };
  
    return (
        <>
        <Navbar/>
      <div className="container mt-5 ">
        <h2>Guide Sign In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="guideUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="guideUsername"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="guidePassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="guidePassword"
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