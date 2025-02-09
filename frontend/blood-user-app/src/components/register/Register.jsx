import React, { useState } from 'react'
import './Register.css'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  const registration = async () =>{
      const new_user = {
        "name" : name,
        "email" : email,
        "password": password,
        "contact": contact
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_user)
    };
    const response = await fetch('http://localhost:5000/user/register', requestOptions);
    const data = await response.json();

    if(data._id!=null)
    {
        setMessage("Registration Success")
    }
    else{
        setMessage("Registration Failed")
    }

  }

  return (
    <>
          {/* register Section */}
    <section id="register" className="register section">
      {/* Section Title */}
      <div className="container section-title " data-aos="fade-up">
        <h2>Registration</h2>
          <div className="col-lg-15 text-center">
            <form action="" method="" className="" data-aos="fade-up" data-aos-delay={200} onSubmit={registration}>
              <div className="row gy-4 text-center">
                <div className="col-md-6 text-center">
                  <input type="text"  className="form-control" name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="col-md-6 text-center">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-md-12 text-center">
                  <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="col-md-12 text-center">
                  <input type="number" className="form-control" name="contact" placeholder="Contact" onChange={(e) => setContact(e.target.value)} required/>
                </div>
                <div className="col-md-12 text-center">
                <button type="submit">Register</button>
                </div>
                <div className="col-md-12 text-center">
                  {message}
                </div>
              </div>
            </form>
          </div>{/* End Login Form */}
        </div>
    </section>{/* /Login Section */}
    </>
  )
}

export default Register
