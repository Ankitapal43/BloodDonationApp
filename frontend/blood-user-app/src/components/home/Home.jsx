import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
   
   <main className="main">
    {/* Hero Section */}
    <section id="hero" className="hero section light-background">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
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
                    <img src="assets/img/departments-1.jpeg" alt="" className="img-fluid" />
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
                    <img src="assets/img/departments-2.jpeg" alt="" className="img-fluid" />
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
                    <img src="assets/img/departments-3.jpeg" alt="" className="img-fluid" />
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
                    <img src="assets/img/departments-4.jpeg" alt="" className="img-fluid" />
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
                    <img src="assets/img/departments-5.jpeg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Departments Section */}

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
                      <img src="assets/img/testimonials/testimonials-6.jpg" className="testimonial-img flex-shrink-0" alt="" />
                      <div>
                        <h3>Ankita pal</h3>
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
                      <img src="assets/img/testimonials/testimonials-6.jpg" className="testimonial-img flex-shrink-0" alt="" />
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
                      <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt="" />
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
                      <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img flex-shrink-0" alt="" />
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
                      <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img flex-shrink-0" alt="" />
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
                <img src="assets/img/gallery/gallery-1.jpeg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-2.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-3.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-4.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-4.jpeg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-5.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-6.jpg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-7.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-7.jpeg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-8.jpeg" className="glightbox" data-gallery="images-gallery">
                <img src="assets/img/gallery/gallery-8.jpeg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>{/* End Gallery Item */}
        </div>
      </div>
    </section>{/* /Gallery Section */}
  
  </main>
  
    






    </>
  )
}

export default Home;
