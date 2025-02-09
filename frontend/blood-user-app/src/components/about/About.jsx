import React from 'react'
import './About.css'

const About = () => {
  return (
   <>
    {/* About Section */}
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 gx-5">
          <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay={200}>
            <img src="assets/img/about.jpg" className="img-fluid" alt />
            <a href="https://youtu.be/SMmApU8xlog?si=AeW6g9hvUNhaMAVh" className="glightbox pulsating-play-btn" />
          </div>
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay={100}>
            <h3>About Us</h3>
            <p>
              We make all types of blood available for the patients and many hospitals. We contribute in saving many lives in the time of need or in an emergency.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-vial-circle-check" />
                <div>
                  <h5>Our Services</h5>
                  <p>We offer convenient and accessible blood donation opportunities for individuals of all ages and blood types. <br />
                    We supply blood products to hospitals and healthcare facilities throughout the region.</p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-pump-medical" />
                <div>
                  <h5>Our Core Values Safety:</h5>
                  <p>We prioritize the safety of our donors and recipients by adhering to strict quality standards and conducting thorough testing procedures.</p>
                  We treat every donor and recipient with respect and empathy, recognizing the importance of their contribution to saving lives.
                </div>
              </li>
              <li>
                <i className="fa-solid fa-heart-circle-xmark" />
                <div>
                  <h5> Our Commitment to Quality</h5>
                  <p>We are dedicated to providing the highest quality blood products and services. <br /> Our facilities are state-of-the-art and our staff are highly trained and experienced.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>{/* /About Section */}
   </>
  )
}

export default About
