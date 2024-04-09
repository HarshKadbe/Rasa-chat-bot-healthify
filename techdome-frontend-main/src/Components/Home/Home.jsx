import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Home.css";
import AboutUs from './AboutUs';
import Features from './Features';

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/features');
     // Ensure this matches your route definitions
  };
  
  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="row ">
          <div className="col-6 align-items-center">
            <div className="ms-5 Land-container">

              <div className="space-provide">
                <div className="Land-text-section">
                  <h1 className="primary-heading">
                    Check Your Symptoms
                  </h1>
                  <p className="primary-text">
                    Unleash the power of artificial intelligence in medical diagnosis.
                    Our AIBot will help you diagnose and predict further future risks.
                  </p>
                  <button onClick={handleClick}   className="secondary-button">
                    Explore
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img className='img-fluid' src="/Images/landingpage.jpg" alt="" />
          </div>
        </div>
      </div>    
      <Features id='features-section' />
      <AboutUs id='about_section' />
    </>
  )


}


