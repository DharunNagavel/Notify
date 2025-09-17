import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Docs from './pages/Docs';
import Notes from './pages/Notes';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
    const [User,setUser]=useState(false);
    const [UserName,setUserName]=useState('');
    const [UserEmail,setUserEmail]=useState('');
  return (
    <>
    <BrowserRouter>
    <Navbar User={User} setUser={setUser} UserName={UserName} />
    <Routes>
      <Route path="/" element={<Home User={User} />}/>
      <Route path="/notes" element={<Notes UserEmail={UserEmail} />}/>
      <Route path="/docs" Component={Docs}/>
      <Route path="/signin" element={<Signin setUser={setUser} setUserName={setUserName} setUserEmail={setUserEmail} />} />
      <Route path="/signup" element={<Signup setUser={setUser} setUserEmail={setUserEmail} setUserName={setUserName} />}/>           
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
