import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.jpg';

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('Select the Role');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === 'Select the Role') {
      alert('Please select the Role');
      return;
    }

    setLoggedIn(true);
    if (userType === 'Admin') {
      navigate('/admin');
    } else if (userType === 'Employee') {
      navigate('/employee');
    }
    // else if(userType === 'HR') {
    //   navigate('./pages/HrPage');
    // }
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex bg-gradient-to-r from-blue-200 to-white-400 justify-center items-center h-screen">
      <div className="bg-gradient-to-r from-blue-400 to-teal-400 bg-opacity-rounded-lg shadow-lg p-16">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
        </div>
        <center>
          <h1 className="text-2xl font-bold mb-4">Login Page</h1>
        </center>
        <div className="mb-4">
          <label htmlFor="userType" className="block mb-2">
            User Type:
          </label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Select the Role">Select the Role</option>
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
            <option value="HR">HR</option>
            </select>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-red-500">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
