import React from 'react'
import { useNavigate } from 'react-router-dom';
// import ChatBoat from '../ChatBoat/Chatboat';
// import Login from '../Authentication/Login';

export default function Features({ isLoggedIn }) {
    const goChatbot = useNavigate();
    const goHeathTips = useNavigate()
    const goToChatbot = (isLoggedIn) => {
        {
            isLoggedIn ? (
                goChatbot('/Chatbot')
            ) : (
            goChatbot('/Login')
        )
        };
    }
    const goToHeathTips = (isLoggedIn) => {
        {
            isLoggedIn ? (
                goHeathTips('/healthTips')
            ) : (
            goHeathTips('/Login')
        )
        };
    }
    return (
        <div>
            <div className="container-fluid home-main back-main">
                <div className="hero-wave"></div>
                <div className="hero-wave"></div>
                <div className="hero-wave"></div>
                <div className="row d-flex flex-column mt-auto justify-content-between z-index-1 h-75">
                    <div className="col-lg-12">
                        <div className='text-white mx-auto' style={{ width: '50vw' }}>
                            <h1 className='text-center blue'>AI Doctor at your fingertips</h1>
                            <h5 className='text-center'>"Healthify" is a cutting-edge health management application designed to empower
                                users in monitoring and improving their well-being. Through seamless integration of AI-driven symptom analysis,
                                personalized diagnosis, and proactive risk prediction, Healthify offers users instant insights into their health status.</h5>
                            <div className='d-flex mt- 5justify-content-center '>
                                <button onClick={goToChatbot} type="button" class="btn btn-primary rounded-pill py-3 fw-5 mt-3  boarder shadow m-auto px-5" ><>Chat Now</></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* <div className="card rounded-5 mb-5" style={{ width: '100vh', height: '25vh', backgroundColor: 'rgb(255 255 255/80%)', boxShadow: 'rgba(50, 50, 93, -25.75) 0px 50px 14px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 45, 56, 38.35) 0px -2px 0px 0px inset' }}>
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div> */}
                    </div>
                </div>
            </div>



            <div className="container mb-5">
                <div className="row my-5 h-50">
                    <div className="col-lg-6  d-flex justify-content-center ">
                        <span>
                            <h1 className='fw-bold'>Health</h1>
                            <h1 className='fw-bold'>Recommendations</h1>
                        </span>
                    </div>
                    <div className="col-lg-6  d-flex justify-content-center ">
                        <div className="px-5">
                            <div className="card-body">

                                <p className="card-text">Healthify analyzes the user's health profile to provide relevant recommendations aimed at promoting well-being and preventing future health risks. These recommendations encompass a wide range of areas including lifestyle modifications, dietary adjustments, exercise routines, medication adherence, and preventive healthcare measures.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid " style={{ backgroundColor: "whitesmoke" }}>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-lg-4 my-5 d-flex justify-content-center">
                            <span>
                                <h1 className='fw-bold'>Get to know </h1>
                                <h1 className='fw-bold'>potential future  risk</h1>
                                <p className='mt-5'>Predicts potential future health risks based on the symptoms and user health history, offering proactive health management advice.</p>
                            </span>
                        </div>
                        <div className="col-lg-8 d-flex justify-content-end p-2">
                            <div className="card mx-5" style={{ width: '18rem' }}>
                                <img src="/Images/covid19.jpg" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card mx-3" style={{ width: '18rem' }}>
                                <img src="/Images/covid19.jpg" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 my-5">
                            <div className="container bg-dark  border rounded-5 d-flex justify-content-center">
                                <img src="/Images/featurs_chat.png" style={{ objectFit: 'cover', width: '100%', height: "100%" }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <span>
                            <h1 className='fw-bold'>Health Tips and</h1>
                            <h1 className='fw-bold'>Article</h1>
                        </span>
                        <img src="/Images/health_tips1.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-6 ">
                        <span>
                            <p>The "Health Tips and Articles" feature in Healthify provides users with a curated collection of informative content aimed at promoting holistic well-being and empowering individuals to make informed health decisions.</p>
                        </span>
                        <img src="/Images/health_tips2.png" className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <span className='bg-dark rounded-pill px-5 mt-5'>
                            <button onClick={goToHeathTips} className='btn btn-lg btn-dark rounded-pill  px-5'>Health Tips</button>
                        </span>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid bg-tranceparent d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: 'url(/Images/getstart.png)', height: '50vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <h1 className=' text-white fw-bold'>Be The First To Try </h1>
                <div className="col-lg-12 d-flex justify-content-center">
                    <span className=' rounded-pill px-5 mt-5'>
                        <button className='btn btn-lg rounded-pill  px-5' style={{ backgroundColor: '#1CE5FF' }}>Get Started</button>
                    </span>
                </div>

            </div> */}
        </div>
    )
}
