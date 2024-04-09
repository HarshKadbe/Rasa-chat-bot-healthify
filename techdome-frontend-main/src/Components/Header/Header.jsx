import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const handleLogout = () => {
    onLogout(); // Call the logout handler passed as a prop
    navigate('/login'); // Navigate to the login page after logging out
  };
  return (
    <div className='fixed-top d-block'>
      <nav className="navbar navbar-expand-lg">
        <div className="container border rounded-pill shadow-sm px-5 p-2" style={{ backgroundColor: 'white' }}>
          <NavLink to="/" className="navbar-brand fw-bold" style={{ color: "blue" }}>
            <img src="Images/Logo.png" alt="Logo" style={{ maxWidth: '120px', height: 'auto' }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <hr className="d-lg-none mt-3 mb-2"></hr>
            <ul className="navbar-nav m-auto">
              
              <>
                  <li className="nav-item">
                    <NavLink to="/"  className={({ isActive }) => `nav-link  ${isActive ? "active fw-bold " : ""} ` } aria-current="page">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Features" className={({ isActive }) => `nav-link  ${isActive ? "active fw-bold " : ""} ` } aria-current="page">
                      Features
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/AboutUs" className={({ isActive }) => `nav-link  ${isActive ? "active fw-bold " : ""} ` } aria-current="page">
                      About Us
                    </NavLink>
                  </li>
                  
                </>
              
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <NavLink to="/Dashboard" className={({ isActive }) => `nav-link  ${isActive ? "active fw-bold " : ""} ` } aria-current="page">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/chatbot" className={({ isActive }) => `nav-link  ${isActive ? "active fw-bold " : ""} ` } aria-current="page" >
                      Chatbot
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="healthTips" className={({ isActive }) => `nav-link  ${isActive ? "active fw-bold " : ""} ` } aria-current="page">
                      Health Tips
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink to="/importapp"className={({ isActive }) => `nav-link  ${isActive ? "active fw-bold " : ""} ` } aria-current="page" >
                      importExcel
                    </NavLink>
                  </li> */}
                </>
              )}
            </ul>
            {isLoggedIn ? (
              <button className="btn btn-primary ms-3" onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink to="/login" className="btn btn-primary ms-3">Login</NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );

}
