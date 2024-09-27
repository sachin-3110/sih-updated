import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import AdminSignup from './AdminSignup';  
import AdminPage from './AdminPage';


const AdminLogin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const adminCredentials = location.state?.adminCredentials || {
    email: "sachin@gmail.com",
    password: "admin123"
  };

  const onLoginSubmit = (data) => {
    if (data.email === adminCredentials.email && data.password === adminCredentials.password) {
      console.log("Admin logged in successfully");
      setError('');
      navigate('/AdminPage'); // Uncommented the navigate function
    } else {
      setError('Invalid email or password');
    }
    reset();
  };

  const handleSignup = () => {
    navigate('/AdminSignup');
  };

  return (
      <div className="h-screen mx-auto flex justify-center items-center p-4 pt-6 md:p-6 lg:p-12 bg-gray-200">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-black">Admin Login</h2>
          <p className="text-lg text-black">Please enter your admin credentials to log in.</p>

          {error && <p className="text-red-500 font-bold mt-2">{error}</p>}

          <form className="mt-4 flex flex-col justify-center" onSubmit={handleSubmit(onLoginSubmit)}>
            <label className="block mb-2 text-black font-semibold" htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              className="w-full p-2 border-2 pl-10 text-sm text-gray-700"
              placeholder="Admin Email"
              {...register('email', { required: true })}
            />
            <label className="block mb-2 text-black font-semibold" htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              className="w-full p-2 border-2 pl-10 text-sm text-gray-700"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            <div className="flex justify-between mt-4">
              <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Login</button>
              <button type="button" onClick={handleSignup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;