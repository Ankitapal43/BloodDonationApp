import React from 'react'

const Footer = () => {
  return (
    <>
        <footer id="footer" className="footer light-background">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt /> <br />
          </a>
          <div className="footer-contact pt-3">
            <p>Saltlake Sec V</p>
            <p>kolkta,West bengal,700091</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+91 9477062173</span></p>
            <p><strong>Email:</strong> <span>bloodcare@gmail.com</span></p>
          </div>
          <div className="social-links d-flex mt-4">
            <a href><i className="bi bi-twitter-x" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <a href><i className="bi bi-linkedin" /></a>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Blood Storage</a></li>
            <li><a href="#">Blood Donation</a></li>
            <li><a href="#">Provision Of Red Blood Cell</a></li>
            <li><a href="#">Provision of platelets</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Available On</h4>
          <img src="assets/img/ios1.png" alt />
          <img src="assets/img/google1.png" alt />
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">Bloodcare</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
