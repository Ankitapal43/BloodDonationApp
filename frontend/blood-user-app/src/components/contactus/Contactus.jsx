import React, { useState } from 'react'
import './Contactus.css'

const Contactus = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const contactnow = async () =>{
        const new_contact = {
          "name" : name,
          "email" : email,
          "subject": subject,
          "message": message
      }
      //this is just for post
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_contact)
    };
    const response = await fetch('http://localhost:5000/contact/contactus', requestOptions);
    const data = await response.json();

    if(data._id!=null)
    {
        setStatus("Contact sent successfully")
    }
    else{
         setStatus("Contact not sent")
    }
  }

  return (
    <>
         {/* Contact Section */}
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
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
            <form action="" method="" className="" data-aos="fade-up" data-aos-delay={200} onSubmit={contactnow}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} required />
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows={6} placeholder="Message" onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <div className="col-md-12 text-center">
                  {/* <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div> */}
                  <button type="submit">Send Message</button>
                </div>
                <div className="col-md-12 text-center">
                  {status}
                </div>
              </div>
            </form>
          </div>{/* End Contact Form */}
        </div>
      </div>
    </section>{/* /Contact Section */}
    </>
  )
}

export default Contactus
