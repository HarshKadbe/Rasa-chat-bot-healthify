import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { LoginContext } from '../../Layout';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(LoginContext);

  const demoEmail = 'demo@example.com';
  const demoPassword = 'password123';

  const handleSignIn = (event) => {
    event.preventDefault();
    if (email === demoEmail && password === demoPassword) {
      toast.success('Login successful');
      handleLogin();
      navigate('/');
    } else {
      toast.error('Incorrect email or password. Please try again.');
    }
  };

  return (
    <section className="container-fluid overflow-x-hidden vh-100 login-page">
      <div className="container-fluid overflow-hidden" style={{ width: '100%', overflow: 'hidden' }}>
        <div className="wave"></div>
      </div>
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-lg-6 col-lg-6 col-xl-5 border rounded-3 p-5 col-md-7 offset-xl-1  " style={{ backgroundColor: '#ffffff63', zIndex: 2 }}>
            <h2 className='text-center fw-bold' style={{ color: 'blue' }}>Welcome Back</h2>
            <p className='text-center'>Login in to continue</p>
            <form className='container px-5' onSubmit={handleSignIn}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example13">Email address</label>
                <input type="email" id="form1Example13" className="form-control " value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example23">Password</label>
                <input type="password" id="form1Example23" className="form-control border bg-gradient" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
                <div className="form-check">
                  <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                  <input className="form-check-input " type="checkbox" value="" id="form1Example3" />
                </div>
                <NavLink to="/forgot-password" className='text-decoration-none'>Forgot password?</NavLink>
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn d-block" style={{ backgroundColor: '' }}>Login</button>
              <p className="text-center mt-3 mb-0">
                Don't have an account? <NavLink to="/Registration" style={{ textDecoration: 'none' }}>Registration</NavLink>
              </p>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a className="btn btn-primary btn-lg btn-block d-block mt-5" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                Continue with Google <span><img src="https://icons8.com/icon/17949/google" alt="" /> </span>
              </a>
            </form>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-6">
            <img src='/Images/Saly-2.png' className="img-fluid" alt="Phone" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
