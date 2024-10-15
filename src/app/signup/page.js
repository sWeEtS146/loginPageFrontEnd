"use client";

// pages/signup.js
import { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can send formData to your API here
    console.log('Form Data Submitted:', formData);
    // Reset form
    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-amber-100 ">
      <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-amber-100  rounded-md hover:bg-amber-400"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

