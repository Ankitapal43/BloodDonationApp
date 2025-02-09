import React from 'react'

const Topbar = () => {
  return (
    <>
        <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="bloodcare@gmail.com">bloodcare@gmail.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+91 9477062173</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
          <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
          <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
        </div>
      </div>
    </div>{/* End Top Bar */}
    </>
  )
}

export default Topbar
