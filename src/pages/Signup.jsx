import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [name, setname] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !mail || !pass) {
      alert("Please fill all fields.");
      return;
    }

    const user = { name, mail, pass };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already registered
    const alreadyExists = existingUsers.some(u => u.mail === mail);
    if (alreadyExists) {
      alert("Account already exists with this email.");
      return;
    }

    const updatedUsers = [...existingUsers, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert("Signup successful!");
    navigate('/signin');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='bg-black text-white p-10 rounded-2xl'>
        <div className='flex items-center justify-center'>
          <img src="notify.png" className='w-12 mt-2 bg-white rounded-full me-3' alt="" />
          <h1 className='text-5xl text-center'>Sign Up</h1>
        </div>
        <form onSubmit={handleSignup} className='flex flex-col gap-8 m-8'>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter the Username' className='text-xl rounded-xl p-2 border-2' />
          <input type="email" value={mail} onChange={(e) => setmail(e.target.value)} placeholder='Enter the Email' className='text-xl rounded-xl p-2 border-2' />
          <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Enter the Password' className='text-xl rounded-xl p-2 border-2' />
          <button className='border-2 p-2 text-2xl border-white rounded-2xl hover:bg-white hover:text-black'>Sign Up</button>
        </form>
        <div className='m-8 text-center'>
          <p>Already have an Account? <Link to="/signin" className='text-blue-500 hover:text-white'>Signin</Link></p>
        </div>
      </div>
    </div>
  );
}
