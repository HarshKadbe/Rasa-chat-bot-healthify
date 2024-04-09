import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './Layout.jsx'; // Import Layout as named export
import Registration from './Components/Authentication/Registration.jsx';
import Home from './Components/Home/Home.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Login from './Components/Authentication/Login.jsx'; // Import Login after Layout
import ProtectedRoute from './ProtectedRoute.jsx'; // Import ProtectedRoute
import ImportApp from './Components/Data-Import/ImportApp.jsx';
import ChatBoat from './Components/ChatBoat/Chatboat.jsx';
import AboutUs from './Components/Home/AboutUs.jsx';
import Features from './Components/Home/Features.jsx';
import healthTips from './Components/HealthTips/healthTips.jsx';

// Wrap the components that require authentication with ProtectedRoute
const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Features" element={<Features />} />
        <Route path="Chatbot" element={<ChatBoat />} />
        <Route path="registration" element={<Registration />} />
        <Route element={<ProtectedRoute />}>
          <Route path='healthTips' element={<healthTips/>}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ImportApp" element={<ImportApp />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
);
