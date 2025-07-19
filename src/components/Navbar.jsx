import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const storedUser = JSON.parse(localStorage.getItem('currentUser'));
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => 
  {
    const handleScroll = () => 
    {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
  }, [])
  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    navigate('/signin');
  }
  return (<>
    <nav className={`sticky top-2 mt-5 scroll-mt-10 border-b-2 rounded-xl mx-4 z-10 ${scrolled ? 'bg-black text-white' : ''}`}>
      <div className='flex justify-between items-center mx-5 my-3'>
          <div className='flex items-center'>
              <img src="notify.png" className={`w-12 mt-2 ${scrolled ? 'bg-white rounded-full me-3' : ''}`} alt="" />
              <h1 className='text-4xl'>Notify</h1>
          </div>
          <div>
              <div className='flex gap-7 text-xl'>
                <div>
                  <Link to="/"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house inline mb-1"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> Home</button></Link>
                </div>
                <div>
                  {storedUser ? (<Link to="/notes"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen inline mb-1"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg> Notes</button></Link>) : 
                  (<Link to="/signin"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen inline mb-1"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg> Notes</button></Link>)}
                </div>
                {/* <div>
                  <Link to="/docs"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-icon lucide-book-open inline mb-1"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>Docs</button></Link>
                </div> */}
                {storedUser ?(<>
                <div>
                  <button onClick={handleSignOut}  className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out inline me-3"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>Log Out </button>
                </div>
                <div>
                  <button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user inline me-3"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>{storedUser.name}</button>
                </div></>):(
                <div className='flex gap-7'>
                  <div>
                    <Link to="/signin"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in-icon lucide-log-in  inline mb-1"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg> Sign In</button></Link>
                  </div>
                  <div>
                    <Link to="/signup"><button className={`p-3 cursor-pointer rounded-3xl transition-all duration-200 ${scrolled ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus-icon lucide-user-round-plus inline mb-1"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg> Sign Up</button></Link>
                  </div>
                </div>)}
              </div>
          </div>
        </div>
    </nav>
  </>)
}
