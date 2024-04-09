import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Registration() {
  return (
    <section className="vh-100 pt-5 login-page">
      <div className="wave"></div>
    <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"/>
          </div>
        <div className=" col-lg-6 col-lg-6 col-xl-5 border rounded-3 p-5 col-md-7 offset-xl-1  " style={{backgroundColor:'#ffffff63', zIndex:2}}>
        <h2 className='text-center fw-bold' style={{color:'blue'}}>Join Us Today</h2>
            {/* <p className='text-center fw-ligher fs-7'>Enter your email and password to register</p> */}
          <form className='container px-3'>
            {/* Full Name input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" className="form-control " />
            </div>

            {/* Email input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email">Email address</label>
              <input type="email" id="email" className="form-control" />
            </div>

            {/* Password input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control " />
            </div>

            {/* Confirm Password input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" className="form-control " />
            </div>

            <button type="submit" className="btn btn-primary btn btn-block">Register</button>

            <p className="text-center mt-3 mb-0">
              Already have an account? <NavLink to="/Login">Login</NavLink>
            </p>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
            <a className="btn btn-primary btn-lg btn-block d-block mt-3" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
              Continue with Google
            </a>

          </form>
        </div>
      </div>
    </div>
  </section>
  );
}
