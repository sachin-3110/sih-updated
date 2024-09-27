import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AdminSignup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSignupSubmit = (data) => {
    console.log("Admin signed up:", data);
    // send data to backend here
    // just pass it to the login page
    navigate('/Login', { state: { adminCredentials: { email: data.email, password: data.password } } });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-gray-200">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-black">Admin Signup</h2>
          <p className="text-lg text-black">Please enter your details to sign up.</p>

          <form className="mt-4 flex flex-col justify-center" onSubmit={handleSubmit(onSignupSubmit)}>
            <label className="block mb-2 text-black font-semibold" htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              className="w-full p-2 border-2 pl-10 text-sm text-gray-700"
              placeholder="Email"
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
            <label className="block mb-2 text-black font-semibold" htmlFor="address">Address</label>
            <input
              required
              type="text"
              id="address"
              className="w-full p-2 border-2 pl-10 text-sm text-gray-700"
              placeholder="Address"
              {...register('address', { required: true })}
            />
            <label className="block mb-2 text-black font-semibold" htmlFor="phone">Phone Number</label>
            <input
              required
              type="tel"
              id="phone"
              className="w-full p-2 border-2 pl-10 text-sm text-gray-700"
              placeholder="Phone Number"
              {...register('phone', { required: true })}
            />
            <label className="block mb-2 text-black font-semibold" htmlFor="profession">Profession</label>
            <select
              required
              id="profession"
              className="w-full p-2 border-2 pl-10 text-sm text-gray-700"
              {...register('profession', { required: true })}
            >
              <option value="">Select Profession</option>
              <option value="doctor">Doctor</option>
              <option value="civilian">Civilian</option>
              <option value="firefighter">Firefighter</option>
              <option value="volunteer">Volunteer</option>
            </select>
            <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
