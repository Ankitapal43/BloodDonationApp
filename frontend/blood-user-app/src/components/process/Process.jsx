import React from 'react'

const Process = () => {
  return (
    <>
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
    </>
  )
}

export default Process
