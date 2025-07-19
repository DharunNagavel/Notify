import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Docs from './pages/Docs';
import Notes from './pages/Notes';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/notes" Component={Notes}/>
      <Route path="/docs" Component={Docs}/>
      <Route path="/signin" Component={Signin}/>
      <Route path="/signup" Component={Signup}/>           
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
