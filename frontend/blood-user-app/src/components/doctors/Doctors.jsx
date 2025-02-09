import React from 'react'

const Doctors = () => {
  return (
    <>
            {/* Doctors Section */}
    <section id="doctors" className="doctors section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Doctors</h2>
        <p>Doctors play a crucial role in the smooth functioning and success of a blood donation camp.</p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="team-member d-flex align-items-start">
              <div className="pic"><img src="assets/img/doctors/doctors-1.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4>Dr. Ajit Pal Singh </h4>
                <span>Department of Medical Lab Technology</span>
                <p>Dr. Ajit Pal Singh  is a  Medical Lab Technology and has an experience of 39 years in this field</p>
                <div className="social">
                  <a href><i className="bi bi-twitter-x" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href> <i className="bi bi-linkedin" /> </a>
                </div>
              </div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="team-member d-flex align-items-start">
              <div className="pic"><img src="assets/img/doctors/doctors-2.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4>Dr. Anju Jain</h4>
                <span>Pathologist</span>
                <p>Dr. Anju Jain is a Pathologist in Salt Lake, Kolkata and has an experience of 19 years in this field</p>
                <div className="social">
                  <a href><i className="bi bi-twitter-x" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href> <i className="bi bi-linkedin" /> </a>
                </div>
              </div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="team-member d-flex align-items-start">
              <div className="pic"><img src="assets/img/doctors/doctors-3.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4> Dr. Debmalya Bhattacharyya</h4>
                <span>Hematologist</span>
                <p>Dr. Debmalya Bhattacharyya is a Hematologist and Hematologic Oncologist &amp; has an experience of 14 years in these fields.</p>
                <div className="social">
                  <a href><i className="bi bi-twitter-x" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href> <i className="bi bi-linkedin" /> </a>
                </div>
              </div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="team-member d-flex align-items-start">
              <div className="pic"><img src="assets/img/doctors/doctors-4.jpg" className="img-fluid" alt /></div>
              <div className="member-info">
                <h4> Dr. Bhavana Arora</h4>
                <span>Pathologist</span>
                <p>
                  Dr. Bhavana Arora is a Pathologist in Salt Lake, Kolkata and has an experience of 31 years in this field</p>
                <div className="social">
                  <a href><i className="bi bi-twitter-x" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href> <i className="bi bi-linkedin" /> </a>
                </div>
              </div>
            </div>
          </div>{/* End Team Member */}
        </div>
      </div>
    </section>{/* /Doctors Section */}
    </>
  )
}

export default Doctors
