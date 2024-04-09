import React, { useState, useEffect } from 'react';
import './ChatBoat.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { sendMessage } from '../../Services/ChatbotServices';


const ChatBot = () => {
    const [lastUserMessage, setLastUserMessage] = useState('');
    const [lastBotResponse, setLastBotResponse] = useState('');
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        if (input.trim()) {
            setLastUserMessage(input);
            const botResponse = await sendMessage(input);
            setLastBotResponse(botResponse);
            setInput('');
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return (

        <div className="main-body">
            <div className="container-fluid position-relative d-flex g-0 w-100 h-100">
                <button id="sidebarbtnopen" className="position-absolute border-0 bg-transparent d-md-none d-none z-3 p-2 m-2" style={{ color: 'white', top: '2px', left: '2px', borderRadius: '4px' }}>
                    <span className>
                        <svg stroke="white" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-sm text-black dark:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                            <line x1={9} y1={3} x2={9} y2={21} />
                        </svg>
                    </span>
                </button>
                <button id="sidebarbtnclosemobile" className="btn btn-close position-absolute d-none border border-3" style={{ top: '10px', left: '265px', zIndex: 999999 }} />
                <div id="sidebar" className="leftpane m-2 border rounded p-2">
                    <div className="position-relative h-100">
                        <div className='justify-content-center' >
                            <a href="/" className="navbar-brand">
                                <img src="Images/Logo.png" alt="Logo" className='m-auto' style={{ maxWidth: '150px', height: 'auto' }} />
                            </a>

                        </div>
                        <div className="d-flex w-100 align-items-center justify-content-start">

                            <a href="#" className="text-decoration-none me-2 py-2 mt-5 border border-1 d-flex flex-grow-1" style={{ borderRadius: '6px', backgroundColor: '#cce6ff' }}>
                                <span className="mx-2" style={{ color: 'white' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" className="bi bi-plus-lg mx-2" viewBox="0 0 16 16">
                                        <path stroke="currentColor" strokeWidth={1} d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z">
                                        </path>
                                    </svg>
                                    <span className="text-black text-truncate text-nowrap" style={{ fontSize: '0.875rem', lineHeight: '1.25rem', fontWeight: 600 }}>
                                        New Chat</span>
                                </span>
                            </a>

                        </div>
                        <div className="d-flex flex-column w-100 h-100" style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                            <div className="pt-2 w-100">
                                <h3 className="ms-2 mt-2" style={{ color: 'rgba(142,142,160,1)', fontSize: '0.75rem' }}>Today</h3>
                            </div>
                            <div className="w-100 d-flex p-2 chat">
                                <span>
                                    <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                </span>
                                <span className="ms-3 my-auto" style={{ wordBreak: 'break-all', maxHeight: '1.25rem', fontSize: '.875rem', fontWeight: 500 }}>demo New
                                    Chat
                                </span>
                            </div>
                        </div>
                        <div id="userinfo" className="mb-2 px-2 d-flex flex-column w-100 border-top border-1">

                            <a href="#" className="items mt-2 w-100 text-decoration-none  px-2 py-2" style={{ borderRadius: '6px' }}>
                                <span style={{ color: 'black' }} className="mb-1">
                                    <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-sm me-2 shrink-0" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </span>
                                <span className='mt-2' style={{ color: '#8353E2', fontWeight: 500, fontSize: '1.2rem' }}>
                                    Karan birla
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main col" style={{ minWidth: '100px' }}>
                    <div className="d-md-none d-flex sticky-top mid-navbar p-2 g-md-0">
                        <div id="sidebarbtnmobile" className="ms-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                                </path>
                            </svg>
                        </div>
                        <h5 className="d-flex mx-auto p-1 text-black opacity-75">New Chat</h5>
                        <div className="ms-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="mt-md-4 my-2 mx-2 col d-flex justify-content-center" style={{ height: '50px' }}>
                        <div className="p-1 text-white d-flex col-12 col-sm-4 col-md-5 col-lg-3" style={{ borderRadius: '7px' }}>
                            <div className="d-flex align-items-center justify-content-center rounded-pill w-100 px-5" >
                                {/* <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="icon-sm transition-colors text-brand-green" width={16} height={16}>
                                        <path d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z" fill="green" />
                                    </svg></span> */}
                                <span className="ms-2 fw-bold text-nowrap text-dark" style={{
                                    color: '#312eff',
                                    backgroundImage: 'linear-gradient(135deg, #312eff 0%, #f12eff 89%)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textFillColor: 'transparent',
                                    fontSize: "2.5rem"
                                }}>Healthify Chatbot</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 p-1 col d-flex  w-100 justify-content-center align-items-center ">
                        <h1 className="text-nowrap text-center" style={{ color: 'gray', fontWeight: 'bolder', fontSize: '2.5rem' }}>
                            Tell Me your Symptoms!
                        </h1>
                    </div>
                    <div className="mt-5 p-5 col d-flex  w-100 justify-content-center align-items-center ">
                        <div className="row w-80 px-5 w-100 g-0 row-cols-md-2 mb-5 ">
                            <div className="col-sm-12 col-md-12 col-lg-4   px-2 py-1 ">
                                <div className="tip mx-3" style={{ border: 'solid 1px rgba(78,79,96,1)', borderRadius: '14px' }}>
                                    <button className="bg-transparent border-0 w-100">
                                        <div className="px-2 py-1">
                                            <div className="text-nowrap text-start text-truncate p-3" style={{ fontWeight: 600, color: 'gray' }}>Hello Namaste Hola AIBot"</div>
                                            {/* <div className="text-nowrap text-truncate opacity-50 text-start">
                                                    for a customer loyalty program in small bookstore</div> */}
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 px-2 py-1">
                                <div className="tip mx-3" style={{ border: 'solid 1px rgba(78,79,96,1)', borderRadius: '14px' }}>
                                    <button className="bg-transparent border-0 w-100">
                                        <div className="px-2 py-1">
                                            <div className="text-nowrap text-start text-truncate p-3" style={{ fontWeight: 600, color: 'gray' }}>I have severe headache. </div>
                                            {/* <div className="text-nowrap text-truncate opacity-50 text-start">
                                                    for a customer loyalty program in small bookstore</div> */}
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 d-md-block d-none px-2 py-1">
                                <div className="tip mx-3" style={{ border: 'solid 1px rgba(78,79,96,1)', borderRadius: '14px' }}>
                                    <button className="bg-transparent border-0 w-100">
                                        <div className="px-2 py-1">
                                            <div className="text-nowrap text-start text-truncate p-3" style={{ fontWeight: 600, color: 'gray' }}>Can you suggest some home-remedies for cold and cough?</div>
                                            {/* <div className="text-nowrap text-truncate opacity-50 text-start">
                                                    for a customer loyalty program in small bookstore</div> */}
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="d-flex mb-4 px-md-4 justify-content-center  w-100 flex-column position-absolute bottom-0">
                        <div className="col-12 col-lg-11 col-xl-8 col-xxl-7 align-self-center d-flex flex-column justify-content-around align-self-start">

                            <div className="d-flex w-100 align-content-center justify-content-center  border-top border-1">
                                <div className="position-relative d-flex my-2 mx-2 py-md-2 w-100 px-2 py-1 pt-2" style={{ borderRadius: '14px', border: 'solid 1px rgba(78,79,96,1)', backgroundColor: '#ecf2f8' }}>
                                    <textarea className="w-100 my-1 bg-transparent border-0" name="send_prompt" id="send_query" tabIndex={0} rows={1} placeholder="Send a message" defaultValue={""} />
                                    <button type="button" className="btn border-0 align-self-end bg-transparent" title="send">
                                        <span id="send" className="px-2 py-1">
                                            <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="icon-sm m-1 md:m-0">
                                                <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="green" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex w-100 align-content-center justify-content-center ">
                                <span className="px-2 text-center" style={{ fontSize: '0.75rem' }}>
                                    <a href="#" className="text-dark">
                                        StormBot may produce inaccurate information about people, places, or fact.Privacy Notice
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ChatBot;
