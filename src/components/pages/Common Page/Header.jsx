import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { getAuthToken, logout } from '../../../auth';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHoverBox, setShowHoverBox] = useState(false);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const navRef = useRef();
  const hoverBoxRef = useRef(null);
  const navigate = useNavigate();

  const isAuthenticated = !!getAuthToken();

  useEffect(() => {
    const updateUserName = () => {
      const storedName = localStorage.getItem('name');
      const storedEmail = localStorage.getItem('email');
      setUserName(storedName || null);
      setEmail(storedEmail || null);
    };

    window.addEventListener('storage', updateUserName);
    updateUserName();

    return () => {
      window.removeEventListener('storage', updateUserName);
    };
  }, [isAuthenticated]);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.startsWith('/movie-show/')) {
      setActiveLink('/movies-shows');
    } else {
      setActiveLink(pathname);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleOutsideClick = (event) => {
    if (hoverBoxRef.current && !hoverBoxRef.current.contains(event.target)) {
      setShowHoverBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSearchClick = () => {
    setShowInput(!showInput);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid" id="Header">
            <div className="mobile_nav">
              <div className="mobile_logo_btn">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </div>
              </div>

              {isAuthenticated && (
                <>
                  <div
                    className={`collapse navbar-collapse d-lg-block d-none ${
                      navbarOpen ? 'show' : ''
                    }`}
                    ref={navRef}
                  >
                    <div className="nav-links">
                      <ul>
                        <li>
                          <Link
                            to="/"
                            className={activeLink === '/' ? 'active' : ''}
                            onClick={toggleNavbar}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/movies-shows"
                            className={
                              activeLink === '/movies-shows' ? 'active' : ''
                            }
                            onClick={toggleNavbar}
                          >
                            Movies & Shows
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/support"
                            className={activeLink === '/support' ? 'active' : ''}
                            onClick={toggleNavbar}
                          >
                            Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/subscriptions"
                            className={
                              activeLink === '/subscriptions' ? 'active' : ''
                            }
                            onClick={toggleNavbar}
                          >
                            Subscriptions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              <div className="nav-icons">
                <div className="search-box">
                  {isAuthenticated && (
                    <i
                      className={`bx ${showInput ? 'bx-x' : 'bx-search'}`}
                      onClick={handleSearchClick}
                    ></i>
                  )}
                  {showInput && (
                    <div className="input-box">
                      <form action="#!">
                        <input type="text" placeholder="Search..." />
                      </form>
                    </div>
                  )}
                </div>
                <div
                  className="login-hover-container"
                  ref={hoverBoxRef}
                  onMouseEnter={() => setShowHoverBox(true)}
                  onMouseLeave={() => setShowHoverBox(false)}
                >
                  {userName ? (
                    <span className="user-avatar">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  ) : (
                    <Link to="/login">
                      <i className="fa-solid fa-user"></i>
                    </Link>
                  )}
                  {showHoverBox && userName && (
                    <div className="hover-box">
                      <div className="hover-box-section">
                        <i className="fa-solid fa-user"></i>
                        <Link className="text-dark" to="/profile">
                          My Profile
                        </Link>
                      </div>
                      <div className="hover-box-section border-top">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        <Link className="text-dark" to="/subscriptions">
                          Upgrade Plan
                        </Link>
                      </div>
                      <div className="hover-box-section border-top">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <button className="btn logout-btn" onClick={handleLogout}>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      {isAuthenticated && (
        <div className="mobile-bottom-nav">
          <Link
            to="/"
            className={`mobile-nav-item ${activeLink === '/' ? 'active' : ''}`}
            onClick={() => setActiveLink('/')}
          >
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </Link>
          <Link
            to="/movies-shows"
            className={`mobile-nav-item ${
              activeLink === '/movies-shows' ? 'active' : ''
            }`}
            onClick={() => setActiveLink('/movies-shows')}
          >
            <i className="fa-solid fa-film"></i>
            <span>Movies</span>
          </Link>
          <Link
            to="/support"
            className={`mobile-nav-item ${
              activeLink === '/support' ? 'active' : ''
            }`}
            onClick={() => setActiveLink('/support')}
          >
            <i className="fa-solid fa-headset"></i>
            <span>Support</span>
          </Link>
          <Link
            to="/subscriptions"
            className={`mobile-nav-item ${
              activeLink === '/subscriptions' ? 'active' : ''
            }`}
            onClick={() => setActiveLink('/subscriptions')}
          >
            <i className="fa-solid fa-ticket"></i>
            <span>Plans</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;