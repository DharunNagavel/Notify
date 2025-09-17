import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export var Name;
function Signin({setUser,setUserName,setUserEmail}) {
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');

  const navigate = useNavigate();
  const handleSignin = (e) => 
    {
      e.preventDefault();
      axios.post('http://localhost:5600/api/v1/auth/signin', { mail: mail, pass: pass })
      .then(res => 
        {
          alert('Login Successful');
          setUser(true);
          setUserEmail(mail);
          setUserName(res.data.name);
          navigate('/');
        })
      .catch(err => console.log(err));
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='bg-black text-white p-10 rounded-2xl'>
        <div className='flex items-center justify-center'>
          <img src="notify.png" className='w-12 mt-2 bg-white rounded-full me-3' alt="" />
          <h1 className='text-5xl text-center'>Sign In</h1>
        </div>
        <form onSubmit={handleSignin} method='post' className='flex flex-col gap-8 m-8'>
          <input type="text" value={mail} onChange={(e) => setmail(e.target.value)} placeholder='Enter the Email' className='text-xl rounded-xl p-2 border-2' required />
          <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Enter the Password' className='text-xl rounded-xl p-2 border-2' required />
          <button className='border-2 p-2 text-2xl border-white rounded-2xl hover:bg-white hover:text-black'>Sign In</button>
        </form>
        <div className='m-8 text-center'>
          <p>Don't have an Account? <Link to="/signup" className='text-blue-500 hover:text-white'>SignUp</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
