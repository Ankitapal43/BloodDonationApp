import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
   
  <div>
  <header id="header" className="header sticky-top">
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
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you alsowish to use an image logo */}
          <img src="assets/img/logo.png" alt width="500%" /> 
        </a><nav id="navmenu" className="navmenu"><a href="index.html" className="logo d-flex align-items-center me-auto">
          </a><ul><a href="index.html" className="logo d-flex align-items-center me-auto">
            </a><li><a href="index.html" className="logo d-flex align-items-center me-auto" /><a href="#hero" className="active">Home<br /></a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Process</a></li>
            <li><a href="#departments">Campaigns</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <a className="cta-btn d-none d-sm-block" href="#appointment">Donate</a>
      </div>
    </div>
  </header>
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section light-background">
      <img src="assets/img/hero-bg.jpg" alt data-aos="fade-in" />
      <div className="container position-relative">
        <div className="welcome position-relative" data-aos="fade-down" data-aos-delay={100}>
          <h2>WELCOME TO BLOODCARE </h2>
          <p>Donate Blood Give The Gift Of Live!</p>
        </div>{/* End Welcome */}
        <div className="content row gy-4">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay={200}>
              <h3>Why Choose Blood Care?</h3>
              <p>
                A blood care ensures a safe and adequate blood supply for those in need, saving lives and supporting the community.
              </p>
              <div className="text-center">
                <a href="#about" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right" /></a>
              </div>
            </div>
          </div>{/* End Why Box */}
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay={300}>
                    <i className="bi bi-clipboard-data" />
                    <h4>Convenience for Donors</h4>
                    <p>Blood donation camps are set up in easily accessible locations like schools, workplaces, community centers, and public spaces.</p>
                  </div>
                </div>{/* End Icon Box */}
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay={400}>
                    <i className="bi bi-gem" />
                    <h4>Helps Save Lives</h4>
                    <p>Blood donation is a crucial way to save lives, especially in emergencies patients with certain medical conditions</p>
                  </div>
                </div>{/* End Icon Box */}
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay={500}>
                    <i className="bi bi-inboxes" />
                    <h4>Community Engagement</h4>
                    <p>Organizing a blood donation camp fosters community spirit and involvement. </p>
                  </div>
                </div>{/* End Icon Box */}
              </div>
            </div>
          </div>
        </div>{/* End  Content*/}
      </div>
    </section>{/* /Hero Section */}
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
    {/* Stats Section */}
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-solid fa-user-doctor" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
              <p>Doctors</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-regular fa-hospital" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
              <p>Services</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-flask" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={12} data-purecounter-duration={1} className="purecounter" />
              <p>Research Labs</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-award" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={150} data-purecounter-duration={1} className="purecounter" />
              <p>Awards</p>
            </div>
          </div>{/* End Stats Item */}
        </div>
      </div>
    </section>{/* /Stats Section */}
    {/* Services Section */}
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Donation Process</h2>
        <p>The donation process from the time you arrive center until the time you leave</p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fas fa-heartbeat" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Registration</h3>
              </a>
              <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-pills" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Health Screening</h3>
              </a>
              <p>We confirm your identity and ask you about the information on your donor health check form a registered nurse may follow up if necessary. <br />
                We test a drop of blood from your finger to check the iron levels (haemoglobin) in your blood.</p>
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-hospital-user" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Donation</h3>
              </a>
              <p>We will insert a needle in your arm which will collect your blood into a blood bag with your unique donor number. <br />
                A scale weighs the blood and stops when you have donated 470ml. This usually takes between 5-10 minutes. <br />
                The needle will be removed, and a sterile dressing applied to your arm.</p>
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-dna" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Refreshment and Recovery</h3>
              </a>
              <p>After donating blood, you'll have a snack and something to drink in the refreshment area <br />
                You'll leave after 10-15 minutes and continue your normal routine <br />
                Enjoy the feeling of accomplishment knowing you are helping to save lives
              </p>
              <a href="#" className="stretched-link" />
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-wheelchair" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Certificate</h3>
              </a>
              <p>This certificate often serves as a token of appreciation and may include details such as the amount of blood donated and the date <br />
                You can also get blood(if you are a donor) when you need it without giving blood in exchange.</p>
              <a href="#" className="stretched-link" />
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-notes-medical" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Benifits</h3>
              </a>
              <p>Improved cardiovascular health: Donating blood can help improve blood flow, reduce arterial blockages, and lower the risk of heart attack. 
                Balanced iron levels: Donating blood can help balance iron levels in the body. Too much iron can cause arteries to harden, which can lead to cardiac diseases. 
              </p> <br />
              <a href="#" className="stretched-link" />
            </div>
          </div>{/* End Service Item */}
        </div>
      </div>
    </section>{/* /Services Section */}
    {/* Appointment Section */}
    <section id="appointment" className="appointment section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Donate</h2>
        <p>Donate blood you can giver a true life giver</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <form action method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" required />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select" required>
                <option value>Select BloodGroup</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select" required>
                <option value>Select Doctor</option>
                <option value="Ajit Pal Singh">Ajit Pal Singh</option>
                <option value="Dr. Anju Jain">Dr. Anju Jain</option>
                <option value="Dr. Debmalya Bhattacharyya">Dr. Debmalya Bhattacharyya</option>
                <option value="Dr. Bhavana Arora">Dr. Bhavana Arora</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
          </div>
          <div className="mt-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            <div className="text-center"><button type="submit">Donate</button></div>
          </div>
        </form>
      </div>
    </section>{/* /Appointment Section */}
    {/* Departments Section */}
    <section id="departments" className="departments section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>OUR CAMPAIGNS</h2>
        <p>Camp- Be part of the powerful movement, bleeding love by donating Blood.</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#departments-tab-1">Blood Donation Camp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-2">Opening Donation Day</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-3">Free Group Checking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-4">Blood Group Collections</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-5">Food Providing</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="departments-tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Blood Donation Camp</h3>
                    <p className="fst-italic">A blood donation camp is a community event where people voluntarily donate blood for medical use.</p>
                    <p> These events are essential to ensure a steady supply of blood for patients in need.
                      By donating blood, you're not just giving a gift. you're offering a lifeline to someone in need. Blood donation camps are a great opportunity to come together as a community and make a positive impact on the lives of others.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-1.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Opening Donation Day</h3>
                    <p className="fst-italic">Let's come together as a community and make a difference, one drop at a time.</p>
                    <p>Your donation today could save a life tomorrow. Thank you for being a hero.
                      Every drop counts. Let's make a splash together for those in need.
                      Join us in this noble cause and be a beacon of hope for those who rely on blood transfusions.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-2.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Free Checking</h3>
                    <p className="fst-italic">Your health, your priority: Free checkups available now.</p>
                    <p>Your health matters: Schedule a free checkup today. <br />nvest in your well-being: Free checkups are just a call away.now your body, know your health: Free checkups for everyone.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-3.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Blood Group Collections</h3>
                    <p className="fst-italic">Your blood type can be a lifesaver: Participate in our blood group collection event.</p>
                    <p>Rare blood types, even rarer heroes: Join our blood group collection drive. <br />Be the hero your community needs: Donate blood, save a life.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-4.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Food Providing </h3>
                    <p className="fst-italic">Thank you for your generosity: Enjoy a well-deserved snack after donating.</p>
                    <p> Refreshments provided for all donors. <br />Your body, your choice, your reward: Enjoy refreshments after donating blood.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-5.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Departments Section */}
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
                <h4>Ajit Pal Singh </h4>
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
                <h4>
                  Dr. Anju Jain</h4>
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
                <h4>
                  Dr. Bhavana Arora</h4>
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
    {/* Faq Section */}
    <section id="faq" className="faq section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Help provide essential information to donors and educate them about the process and its importance. </p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>What are the benefits of donating blood?</h3>
                <div className="faq-content">
                  <p>Donating blood helps save lives and maintain a healthy blood supply for the community. It can also provide a sense of accomplishment and satisfaction.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3> Who can donate blood?</h3>
                <div className="faq-content">
                  <p>Generally, healthy individuals aged 18-65 with a weight of at least 45 kg (99 lbs) can donate blood.
                    Specific eligibility criteria may vary depending on the country or region.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>Is blood donation safe?</h3>
                <div className="faq-content">
                  <p>Yes, blood donation is generally safe. Modern blood donation procedures and equipment minimize the risk of complications.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>How long does it take to donate blood?</h3>
                <div className="faq-content">
                  <p>The entire process, including registration, screening, and donation, typically takes around 30-45 minutes.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>How often can I donate blood?</h3>
                <div className="faq-content">
                  <p>The frequency of blood donations depends on your blood type and local regulations.
                    In many places, donors can donate every 56 days.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>Can I eat before donating blood?</h3>
                <div className="faq-content">
                  <p>It's generally recommended to eat a light meal before donating blood to avoid feeling faint.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
            </div>
          </div>{/* End Faq Column*/}
        </div>
      </div>
    </section>{/* /Faq Section */}
    {/* Testimonials Section */}
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay={100}>
            <h3>Testimonials</h3>
            <p>
              Donating blood is a small act that can make a big difference. It's a simple way to give back to my community and help others in need
            </p>
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay={200}>
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img flex-shrink-0" alt height="20px" />
                      <div>
                        <h3>Shouvik Maity</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Contributing to the development of the company's overall vision, mission, and goals. A successful co-founder brings complementary skills, shared values, and a strong working relationship to the table.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-6.jpg" className="testimonial-img flex-shrink-0" alt height="5px" />
                      <div>
                        <h3>Ankita Pal</h3>
                        <h4>Manager</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Setting goals, developing strategies, and allocating resources. ability to inspire and motivate others.Effective managers possess strong leadership, communication, and problem-solving skills.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt />
                      <div>
                        <h3>Abhijit Naskar</h3>
                        <h4>Store Owner</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Managing all aspects of the store, including inventory, pricing, customer service, and staff. Successful store owners possess strong business acumen, excellent customer service skills, and a passion for retail.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img flex-shrink-0" alt height="5px" />
                      <div>
                        <h3>Payel Das</h3>
                        <h4>Freelancer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>The flexibility to choose their projects and set their own hours. Successful freelancers possess strong skills, excellent time management abilities, and the ability to market themselves effectively.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img flex-shrink-0" alt />
                      <div>
                        <h3>Souvik Mahajan</h3>
                        <h4>Entrepreneur</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Buisness risks,innovate,and create value.Successful entrepreneurs possess a strong entrepreneurial spirit,excellent problem-solving skills,and a passion for their ventures.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Testimonials Section */}
    {/* Gallery Section */}
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Explore the beauty,joy &amp; diverse experiences.</p>
      </div>{/* End Section Title */}
      <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-1.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-1.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-2.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-2.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-3.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-3.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-4.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-4.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-5.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-5.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-6.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-7.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-7.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-8.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-8.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
        </div>
      </div>
    </section>{/* /Gallery Section */}
    {/* Contact Section */}
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p> Ensure the contact form is easily accessible for visitors.</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Location</h3>
                <p>Saltlake Sec V,kolkta,West bengal,700091</p>
              </div>
            </div>{/* End Info Item */}
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>+91 9477062173</p>
              </div>
            </div>{/* End Info Item */}
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={500}>
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>bloodcare@gmail.com</p>
              </div>
            </div>{/* End Info Item */}
          </div>
          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={200}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>{/* End Contact Form */}
        </div>
      </div>
    </section>{/* /Contact Section */}
  </main>
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
</div>





    </>
  )
}

export default Home;




Another 




import React from 'react'
import './Home.css'
import Topbar from '../includes/Topbar';
import Navbar from '../includes/Navbar';
import Footer from '../includes/Footer';
import About from '../about/About';
import Contactus from '../contactus/Contactus';

const Home = () => {
  return (
    <>
   
  <div>
  <header id="header" className="header sticky-top">
    
    <Topbar></Topbar>

    <Navbar></Navbar>

  </header>
  <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section light-background">
      <img src="assets/img/hero-bg.jpg" alt data-aos="fade-in" />
      <div className="container position-relative">
        <div className="welcome position-relative" data-aos="fade-down" data-aos-delay={100}>
          <h2>WELCOME TO BLOODCARE </h2>
          <p>Donate Blood Give The Gift Of Live!</p>
        </div>{/* End Welcome */}
        <div className="content row gy-4">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay={200}>
              <h3>Why Choose Blood Care?</h3>
              <p>
                A blood care ensures a safe and adequate blood supply for those in need, saving lives and supporting the community.
              </p>
              <div className="text-center">
                <a href="#about" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right" /></a>
              </div>
            </div>
          </div>{/* End Why Box */}
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay={300}>
                    <i className="bi bi-clipboard-data" />
                    <h4>Convenience for Donors</h4>
                    <p>Blood donation camps are set up in easily accessible locations like schools, workplaces, community centers, and public spaces.</p>
                  </div>
                </div>{/* End Icon Box */}
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay={400}>
                    <i className="bi bi-gem" />
                    <h4>Helps Save Lives</h4>
                    <p>Blood donation is a crucial way to save lives, especially in emergencies patients with certain medical conditions</p>
                  </div>
                </div>{/* End Icon Box */}
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay={500}>
                    <i className="bi bi-inboxes" />
                    <h4>Community Engagement</h4>
                    <p>Organizing a blood donation camp fosters community spirit and involvement. </p>
                  </div>
                </div>{/* End Icon Box */}
              </div>
            </div>
          </div>
        </div>{/* End  Content*/}
      </div>
    </section>{/* /Hero Section */}
    <About></About>
    {/* Stats Section */}
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-solid fa-user-doctor" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
              <p>Doctors</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fa-regular fa-hospital" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
              <p>Services</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-flask" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={12} data-purecounter-duration={1} className="purecounter" />
              <p>Research Labs</p>
            </div>
          </div>{/* End Stats Item */}
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="fas fa-award" />
            <div className="stats-item">
              <span data-purecounter-start={0} data-purecounter-end={150} data-purecounter-duration={1} className="purecounter" />
              <p>Awards</p>
            </div>
          </div>{/* End Stats Item */}
        </div>
      </div>
    </section>{/* /Stats Section */}
    {/* Services Section */}
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Donation Process</h2>
        <p>The donation process from the time you arrive center until the time you leave</p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fas fa-heartbeat" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Registration</h3>
              </a>
              <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-pills" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Health Screening</h3>
              </a>
              <p>We confirm your identity and ask you about the information on your donor health check form a registered nurse may follow up if necessary. <br />
                We test a drop of blood from your finger to check the iron levels (haemoglobin) in your blood.</p>
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-hospital-user" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Donation</h3>
              </a>
              <p>We will insert a needle in your arm which will collect your blood into a blood bag with your unique donor number. <br />
                A scale weighs the blood and stops when you have donated 470ml. This usually takes between 5-10 minutes. <br />
                The needle will be removed, and a sterile dressing applied to your arm.</p>
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-dna" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Refreshment and Recovery</h3>
              </a>
              <p>After donating blood, you'll have a snack and something to drink in the refreshment area <br />
                You'll leave after 10-15 minutes and continue your normal routine <br />
                Enjoy the feeling of accomplishment knowing you are helping to save lives
              </p>
              <a href="#" className="stretched-link" />
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-wheelchair" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Certificate</h3>
              </a>
              <p>This certificate often serves as a token of appreciation and may include details such as the amount of blood donated and the date <br />
                You can also get blood(if you are a donor) when you need it without giving blood in exchange.</p>
              <a href="#" className="stretched-link" />
            </div>
          </div>{/* End Service Item */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={600}>
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-notes-medical" />
              </div>
              <a href="#" className="stretched-link">
                <h3>Benifits</h3>
              </a>
              <p>Improved cardiovascular health: Donating blood can help improve blood flow, reduce arterial blockages, and lower the risk of heart attack. 
                Balanced iron levels: Donating blood can help balance iron levels in the body. Too much iron can cause arteries to harden, which can lead to cardiac diseases. 
              </p> <br />
              <a href="#" className="stretched-link" />
            </div>
          </div>{/* End Service Item */}
        </div>
      </div>
    </section>{/* /Services Section */}
    {/* Appointment Section */}
    <section id="appointment" className="appointment section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Donate</h2>
        <p>Donate blood you can giver a true life giver</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <form action method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" required />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select" required>
                <option value>Select BloodGroup</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select" required>
                <option value>Select Doctor</option>
                <option value="Ajit Pal Singh">Ajit Pal Singh</option>
                <option value="Dr. Anju Jain">Dr. Anju Jain</option>
                <option value="Dr. Debmalya Bhattacharyya">Dr. Debmalya Bhattacharyya</option>
                <option value="Dr. Bhavana Arora">Dr. Bhavana Arora</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
          </div>
          <div className="mt-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            <div className="text-center"><button type="submit">Donate</button></div>
          </div>
        </form>
      </div>
    </section>{/* /Appointment Section */}
    {/* Departments Section */}
    <section id="departments" className="departments section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>OUR CAMPAIGNS</h2>
        <p>Camp- Be part of the powerful movement, bleeding love by donating Blood.</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#departments-tab-1">Blood Donation Camp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-2">Opening Donation Day</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-3">Free Group Checking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-4">Blood Group Collections</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-5">Food Providing</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="departments-tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Blood Donation Camp</h3>
                    <p className="fst-italic">A blood donation camp is a community event where people voluntarily donate blood for medical use.</p>
                    <p> These events are essential to ensure a steady supply of blood for patients in need.
                      By donating blood, you're not just giving a gift. you're offering a lifeline to someone in need. Blood donation camps are a great opportunity to come together as a community and make a positive impact on the lives of others.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-1.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Opening Donation Day</h3>
                    <p className="fst-italic">Let's come together as a community and make a difference, one drop at a time.</p>
                    <p>Your donation today could save a life tomorrow. Thank you for being a hero.
                      Every drop counts. Let's make a splash together for those in need.
                      Join us in this noble cause and be a beacon of hope for those who rely on blood transfusions.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-2.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Free Checking</h3>
                    <p className="fst-italic">Your health, your priority: Free checkups available now.</p>
                    <p>Your health matters: Schedule a free checkup today. <br />nvest in your well-being: Free checkups are just a call away.now your body, know your health: Free checkups for everyone.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-3.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Blood Group Collections</h3>
                    <p className="fst-italic">Your blood type can be a lifesaver: Participate in our blood group collection event.</p>
                    <p>Rare blood types, even rarer heroes: Join our blood group collection drive. <br />Be the hero your community needs: Donate blood, save a life.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-4.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Food Providing </h3>
                    <p className="fst-italic">Thank you for your generosity: Enjoy a well-deserved snack after donating.</p>
                    <p> Refreshments provided for all donors. <br />Your body, your choice, your reward: Enjoy refreshments after donating blood.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="assets/img/departments-5.jpeg" alt className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Departments Section */}
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
                <h4>Ajit Pal Singh </h4>
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
                <h4>
                  Dr. Anju Jain</h4>
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
                <h4>
                  Dr. Bhavana Arora</h4>
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
    {/* Faq Section */}
    <section id="faq" className="faq section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Help provide essential information to donors and educate them about the process and its importance. </p>
      </div>{/* End Section Title */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>What are the benefits of donating blood?</h3>
                <div className="faq-content">
                  <p>Donating blood helps save lives and maintain a healthy blood supply for the community. It can also provide a sense of accomplishment and satisfaction.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3> Who can donate blood?</h3>
                <div className="faq-content">
                  <p>Generally, healthy individuals aged 18-65 with a weight of at least 45 kg (99 lbs) can donate blood.
                    Specific eligibility criteria may vary depending on the country or region.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>Is blood donation safe?</h3>
                <div className="faq-content">
                  <p>Yes, blood donation is generally safe. Modern blood donation procedures and equipment minimize the risk of complications.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>How long does it take to donate blood?</h3>
                <div className="faq-content">
                  <p>The entire process, including registration, screening, and donation, typically takes around 30-45 minutes.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>How often can I donate blood?</h3>
                <div className="faq-content">
                  <p>The frequency of blood donations depends on your blood type and local regulations.
                    In many places, donors can donate every 56 days.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
              <div className="faq-item">
                <h3>Can I eat before donating blood?</h3>
                <div className="faq-content">
                  <p>It's generally recommended to eat a light meal before donating blood to avoid feeling faint.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right" />
              </div>{/* End Faq item*/}
            </div>
          </div>{/* End Faq Column*/}
        </div>
      </div>
    </section>{/* /Faq Section */}
    {/* Testimonials Section */}
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay={100}>
            <h3>Testimonials</h3>
            <p>
              Donating blood is a small act that can make a big difference. It's a simple way to give back to my community and help others in need
            </p>
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay={200}>
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img flex-shrink-0" alt height="20px" />
                      <div>
                        <h3>Shouvik Maity</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Contributing to the development of the company's overall vision, mission, and goals. A successful co-founder brings complementary skills, shared values, and a strong working relationship to the table.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-6.jpg" className="testimonial-img flex-shrink-0" alt height="5px" />
                      <div>
                        <h3>Ankita Pal</h3>
                        <h4>Manager</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Setting goals, developing strategies, and allocating resources. ability to inspire and motivate others.Effective managers possess strong leadership, communication, and problem-solving skills.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt />
                      <div>
                        <h3>Abhijit Naskar</h3>
                        <h4>Store Owner</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Managing all aspects of the store, including inventory, pricing, customer service, and staff. Successful store owners possess strong business acumen, excellent customer service skills, and a passion for retail.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img flex-shrink-0" alt height="5px" />
                      <div>
                        <h3>Payel Das</h3>
                        <h4>Freelancer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>The flexibility to choose their projects and set their own hours. Successful freelancers possess strong skills, excellent time management abilities, and the ability to market themselves effectively.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img flex-shrink-0" alt />
                      <div>
                        <h3>Souvik Mahajan</h3>
                        <h4>Entrepreneur</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                      <span>Buisness risks,innovate,and create value.Successful entrepreneurs possess a strong entrepreneurial spirit,excellent problem-solving skills,and a passion for their ventures.</span>
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                  </div>
                </div>{/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Testimonials Section */}
    {/* Gallery Section */}
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Explore the beauty,joy &amp; diverse experiences.</p>
      </div>{/* End Section Title */}
      <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-1.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-1.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-2.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-2.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-3.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-3.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-4.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-4.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-5.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-5.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-6.jpg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-7.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-7.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-8.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-8.jpeg" alt className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
        </div>
      </div>
    </section>{/* /Gallery Section */}
   <Contactus></Contactus>
  </main>
  
    <Footer></Footer>

</div>





    </>
  )
}

export default Home;


body{
    background-color: #8a2be3;
}


.login{
    width: 30%;
    margin-left: 35%;
    margin-top: 15%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 5px 5px black;
}

.login .input-box{
    width: 92%;
    padding: 10px;
    margin-bottom: 15px;
}

.login h3{
    font-size: 25px;
}

.login button{
    width: 98%;
    padding: 7px;
    font-size: 20px;
    border-radius: 25px;
    border: none;
    color: white;
    background: linear-gradient(to right, #cc3300 0%, #ffff00 100%);
    margin-bottom: 15px;
}

.login a{
    text-decoration: none;

}