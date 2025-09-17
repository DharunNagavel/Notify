import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Signup({setUser,setUserEmail,setUserName}) {
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  const [name, setname] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5600/api/v1/auth/signup',{name,mail,pass})
    .then(res=>{
      alert('Login Successful')
      setUser(true)
      setUserName(res.data.user.name);
      setUserEmail(mail);
      navigate('/')
    })
    .catch(err =>{console.log(err)})
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='bg-black text-white p-10 rounded-2xl'>
        <div className='flex items-center justify-center'>
          <img src="notify.png" className='w-12 mt-2 bg-white rounded-full me-3' alt="" />
          <h1 className='text-5xl text-center'>Sign Up</h1>
        </div>
        <form onSubmit={handleSignup} method='post' className='flex flex-col gap-8 m-8'>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter the Username' className='text-xl rounded-xl p-2 border-2' required />
          <input type="email" value={mail} onChange={(e) => setmail(e.target.value)} placeholder='Enter the Email' className='text-xl rounded-xl p-2 border-2' required />
          <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Enter the Password' className='text-xl rounded-xl p-2 border-2' required />
          <button className='border-2 p-2 text-2xl border-white rounded-2xl hover:bg-white hover:text-black'>Sign Up</button>
        </form>
        <div className='m-8 text-center'>
          <p>Already have an Account? <Link to="/signin" className='text-blue-500 hover:text-white'>Signin</Link></p>
        </div>
      </div>
    </div>
  );
}
