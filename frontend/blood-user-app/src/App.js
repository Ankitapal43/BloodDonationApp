import logo from './logo.svg';
import './App.css';
import Topbar from './components/includes/Topbar';
import Navbar from './components/includes/Navbar';
import Footer from './components/includes/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Contactus from './components/contactus/Contactus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Login from './components/login/Login';
import Donate from './components/donate/Donate';
import Process from './components/process/Process';
import Doctors from './components/doctors/Doctors';
import Register from './components/register/Register';

function App() {
  return (
    <div>
       <header id="header" className="header sticky-top">
    
    <Topbar></Topbar>

    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/process" element={<Process></Process>}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route path="/contactus" element={<Contactus></Contactus>}></Route>
        <Route path="/donate" element={<Donate></Donate>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* <Route path="/login" element={<Login></Login>}></Route> */}
      </Routes>
    </Router>


    <Footer></Footer>
  </header>

  
     
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Contactus></Contactus> */}

     
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


    </div>
  );
}

export default App;
