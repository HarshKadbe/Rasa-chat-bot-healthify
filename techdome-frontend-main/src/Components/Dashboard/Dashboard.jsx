import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Services/AuthService';
import { useEffect } from 'react';
// import * as pbi from 'powerbi-client';
// import powerbi from 'powerbi-client';


const Dashboard = () => {
    const isLoggedIn = useAuth(); // Use the hook to get the login status
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect the user to the login page if they're not authenticated
        if (!isLoggedIn) {
            navigate('/Login');
        }

        // const embedConfig = {
        //     type: 'report',
        //     id: 'your-report-id',
        //     embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=your-report-id',
        //     accessToken: 'your-access-token',
        //     tokenType: pbi.models.TokenType.Embed,
        //     settings: {
        //         panes: {
        //             filters: {
        //                 visible: false
        //             }
        //         }
        //     }
        // };

        // const embedContainer = document.getElementById('powerBIReportContainer');
        // const report = powerbi.embed(embedContainer, embedConfig);

        // return () => {
        //     report.off('loaded');
        // };
    },);

    return (
        // </div>
        <div className="container-fluid vh-100 ">
            <div className="row ">
                <div className="col-auto  px-sm-2 px-0 bg-white p-3 border ">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-auto pt-2  min-vh-100">
                        <NavLink to="/" className="navbar-brand fw-bold " style={{ color: "blue" }}>
                            <img src="Images/Logo.png" alt="Logo" style={{ maxWidth: '120px', height: 'auto' }} />
                        </NavLink>
                        <div>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start pt-5 px-3" id="menu">

                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <span className="ms-1 d-none d-sm-inline"><h5>Dashboard</h5></span>
                                    </a>
                                    {/* <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                                        </li>
                                    </ul> */}
                                </li>

                                {/* <li className="nav-item">
                                    <NavLink to="/Chatbot" className="nav-link active " aria-current="page">
                                        Chatbot
                                    </NavLink>
                                </li> */}

                            </ul>
                        </div>
                        <hr />
                        
                    </div>
                </div>
                <div className="col py-1 bg-gray">
                    <div className="row ">
                        <div className="col-12 border">
                            <nav className="navbar navbar-light bg-light">
                                <div class="container-fluid">
                                    <a className="navbar-brand"><h2>Dashboard</h2></a>

                                    {/* <form className="d-flex">
                                        
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-primary" type="submit">Search</button>
                                    // </form> */}

                                    <div className="dropdown pb-4">
                                        <a href="#" className="d-flex   text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {/* <h6 className="d-none d-sm-inline text-dark mx-1">Karan birla</h6> */}
                                            <img src="/Images/profile.jpg" alt="hugenerd" width="40" height="40" className="rounded-circle" />
                                        </a>
                                        <ul className="dropdown-menu index-2 dropdown-menu-light text-small shadow">
                                            {/* <li><a className="dropdown-item" href="#">New project...</a></li> */}
                                            <li><a className="dropdown-item" href="#">Settings</a></li>
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            {/* <li><NavLink  className="dropdown-item"></NavLink> logout</li> */}
                                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="row  ">
                        <div id="powerBIReportContainer" className='p-3' >
                            {/* <iframe title="AYUSHI PATEL INTERNSHIP" width="100%" height="1060" id='dashboard' src="https://app.powerbi.com/view?r=eyJrIjoiMWVkMmEyMzYtY2RlNC00Mzc1LWEyNDItNjliZjgxN2U5MmE0IiwidCI6IjQwYzk4NmEwLTZiMDEtNDdhMi1iYzgxLTQwNWU3ZmEwMTFhNyJ9" frameborder="0" ></iframe> */}
                            <iframe title="dashboard" width="100%" height="1060" src="https://app.powerbi.com/view?r=eyJrIjoiOTY2ZDhjMGMtNTRiNC00NmM3LWJlMjItNjkxYjY3MWJmMWMzIiwidCI6IjQwYzk4NmEwLTZiMDEtNDdhMi1iYzgxLTQwNWU3ZmEwMTFhNyJ9" frameborder="0" allowFullScreen="true"></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
