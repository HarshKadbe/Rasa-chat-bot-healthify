import React from 'react'
import './Home.css'

export default function AboutUs() {
  return (
    <>
        <div className="container-fluid about1  ">
            <div className="row justify-content-center">
                <div className="col-12 vh-40 d-flex flex-column justify-content-center align-items-center " style={{height:'40vh'}}>
                    <h1 className='' style={{fontSize:'4rem',color:'white'}}>About us</h1>
                </div>
                <div className="col-8 border rounded-5 shadow  bg-white " style={{height:'27.5rem',width:'62rem'}}>
                  <div className="row">
                    <div className="col-4">
                      <div style={{margin:'3rem'}}>
                      <h1 className='fw-bold' style={{fontSize:'5rem',color:'#8353E2'}}>Who</h1>
                      <h1 className='fw-bold' style={{fontSize:'5rem',color:'#8353E2'}}>we</h1>
                      <h1 className='fw-bold' style={{fontSize:'5rem',color:'#8353E2'}}>are?</h1>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-12" style={{height:'48%'}}>
                          <div className='d-flex mt-5' style={{}}>
                            <span className='mx-3'>
                              ico
                            </span>
                            <span>
                              <p>Welcome to Healthify, your trusted companion on the journey towards better health and well-being. At Healthify, we're committed to leveraging cutting-edge technology and expert insights to empower individuals to take control of their health in a proactive and personalized manner.</p>
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div className="col-12" style={{height:'48%'}}>
                          <div className='d-flex mt-2' style={{}}>
                            <span className='mx-3'>
                              ico
                            </span>
                            <span>
                              <h5 className='fw-normal pb-1'>Our Mission</h5>
                              <p>Our mission at Healthify is simple yet ambitious: to revolutionize the way people approach healthcare by providing accessible, intuitive, and intelligent solutions that cater to their unique needs and preferences. We believe that everyone deserves access to high-quality healthcare information and support, and we're dedicated to making this vision a reality.</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
            </div>

        </div>
    </>
  )
}
