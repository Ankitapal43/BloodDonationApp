import React, { useState } from 'react'
import './Donate.css'


const Donate = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date_time, setDate_time] = useState('')
  const [blood_group, setBlood_group] = useState('')
  const [doctor, setDoctor] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const donatenow = async () =>{
    const new_doner = {
      "name" : name,
      "email" : email,
      "phone": phone,
      "date_time": date_time,
      "blood_group": blood_group,
      "doctor": doctor,
      "message": message
    }
      //this is just for post
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_doner)
    };
    const response = await fetch('http://localhost:5000/doner/donate', requestOptions);
    const data = await response.json();

    if(data._id!=null)
    {
        setStatus("Donate  successfully")
    }
    else{
        setStatus("Donate not sent")
    }
  }


  return (
    <>
         {/* Appointment Section */}
    <section id="donate" className="donate section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Donate</h2>
        <p>Donate blood you can giver a true life giver</p>
      </div>{/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100} >
        <form action="" method="" role="form" className="" onSubmit={donatenow} >
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="datetime-local" name="date_time" className="form-control datepicker" id="date_time" placeholder="Appointment Date" onChange={(e) => setDate_time(e.target.value)} required />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="blood_group" id="blood_group" className="form-select" onChange={(e) => setBlood_group(e.target.value)} required>
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
              <select name="doctor" id="doctor" className="form-select" onChange={(e) => setDoctor(e.target.value)} required>
                <option value>Select Doctor</option>
                <option value="Dr. Ajit Pal Singh">Dr. Ajit Pal Singh</option>
                <option value="Dr. Anju Jain">Dr. Anju Jain</option>
                <option value="Dr. Debmalya Bhattacharyya">Dr. Debmalya Bhattacharyya</option>
                <option value="Dr. Bhavana Arora">Dr. Bhavana Arora</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" onChange={(e) => setMessage(e.target.value)} defaultValue={""} />
          </div>
          <div className="mt-3">
            {/* <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div> */}
            <div className="col-md-12 text-center">
            <button type="submit">Donate Blood</button> <button type="submit">Donate money</button>
            </div>
            <div className="col-md-12 text-center">
                  {status}
             </div>
          </div>
        </form>
      </div>
    </section>{/* /Appointment Section */}
    </>
  )
}

export default Donate
