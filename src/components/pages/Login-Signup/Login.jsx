import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../auth'; // Import auth function

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!formData.password) {
      setError('Password is required.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post('https://server-r7k9.onrender.com/api/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.token && response.data.name && response.data.email) {
        setAuthToken(response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('email', response.data.email);

        setFormData({ email: '', password: '' });
        navigate('/');
      } else {
        setError('Invalid response from server.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Google Login Handler
  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    try {
      const response = await axios.post('https://server-r7k9.onrender.com/api/google-login', {
        token: credentialResponse.credential,
      });

      if (response.data.token && response.data.name && response.data.email) {
        setAuthToken(response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('email', response.data.email);
        navigate('/');
      } else {
        setError('Invalid response from Google login.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Initialize Google Sign-In
  useEffect(() => {
    window.google?.accounts.id.initialize({
      client_id: '576302078072-2rk9n9co61scp5vdf95j06qjqvfmb4f5.apps.googleusercontent.com', // Replace with your Google Client ID
      callback: handleGoogleLogin,
    });
    window.google?.accounts.id.renderButton(
      document.getElementById('googleSignInButton'),
      { theme: 'outline', size: 'large' } // Customize button appearance
    );
  }, []);

  return (
    <section className="login_section home_banner">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="login_card p-4 shadow-lg">
          <h2 className="text-center mb-4">Sign In</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>
          {/* Google Sign-In Button */}
          <div className="text-center mt-3">
            <div id="googleSignInButton"></div>
          </div>
          <div className="text-center mt-3">
            <p>Don't have an account? <a href="/signup" className="text-primary">Sign Up</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;