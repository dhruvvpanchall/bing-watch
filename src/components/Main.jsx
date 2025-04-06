import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import Home from './pages/Home';
import Header from './pages/Common Page/Header';
import Footer from './pages/Common Page/Footer';
import Error from './pages/Common Page/Error';
import MoviesPage from './pages/MoviesPage';
import Subscription from './pages/Subscription';
import Support from './pages/Support';
import MovieOpenPage from './pages/MovieOpenPage';
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange';
import Payment from './pages/Payment';
import Login from './pages/Login-Signup/Login';
import Signup from './pages/Login-Signup/Singup';
import Profile from './pages/Common Page/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'swiper/swiper-bundle.css';
import './assets/css/Style.css';
import './assets/css/responsive.css';
import 'aos/dist/aos.css';
import PrivateRoute from './PrivateRoute';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QfdBaEAOMROO2lEkHXGakF9fZJDM7LBjfjPjZjTjS9ob7xJjz01cSfsqfSrcI894zzudVCUA7tjWG0iTCBLhwWw00iWE3k90j');

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);  // Trigger re-render when login is successful
  };

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} /> 
        <Route path="/" element={<PrivateRoute element={<Home />} />} /> 
        <Route path="/movies-shows" element={<PrivateRoute element={<MoviesPage />} />} />
        <Route path="/support" element={<PrivateRoute element={<Support />} />} />
        <Route path="/subscriptions" element={<PrivateRoute element={<Subscription />} />} />
        <Route path="/movie-show/:title" element={<PrivateRoute element={<MovieOpenPage />} />} />
        <Route
          path="/Payment-Page"
          element={<PrivateRoute element={<Elements stripe={stripePromise}><Payment /></Elements>} />}
        />

        {/* Fallback/Error Route */}
        <Route path="*" element={<Error />} />
      </Routes>
       <Footer isAuthenticated={isAuthenticated} />
    </Router>
  );
}

export default Main;
