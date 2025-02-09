import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you alsowish to use an image logo */}
          <img src="assets/img/logo.png" alt width="500%" /> 
        </a><nav id="navmenu" className="navmenu"><a href="index.html" className="logo d-flex align-items-center me-auto">
          </a><ul><a href="index.html" className="logo d-flex align-items-center me-auto">
            </a><li><a href="index.html" className="logo d-flex align-items-center me-auto" /></li>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/process">Process</Link></li>
            {/* <li><a href="#departments">Campaigns</a></li> */}
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <Link className="cta-btn d-none d-sm-block" to="/donate">Donate</Link>
        <Link className="cta-btn d-none d-sm-block" to="/register">Register</Link>
        {/* <Link className="cta-btn d-none d-sm-block" to="/login" >Login</Link> */}
        
      </div>
    </div>
    </>
  )
}

export default Navbar
