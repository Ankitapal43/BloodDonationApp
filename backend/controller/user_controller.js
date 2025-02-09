const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer');


// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'ankitapal32854@gmail.com',
            pass: 'mhatkujqqfnjigkr',
         },
    secure: true,
});


const User = require('../model/User')

router.get("/", function (req, res) {
    res.send("User home page");
  });

  router.post('/send_otp',async (req, res) => {
    
    const email = req.body.email
    const otp = Math. floor(Math. random() * (999999 - 100000 + 1)) + 100000

    const mailData = {
          from: 'ankitapal32854@gmail.com',  // sender address
          to: email ,   // list of receivers
          subject: 'OTP for new Registration',
          text: 'Blood Donation',
          html: '<b>Hey there! </b><br> Your OTP is '+otp+'<br/>',
        };
    
        transporter.sendMail(mailData, function (err, info) {
            if(err)
              res.send({message: 'failed'})
            else
              res.send({message: 'success'});
         });
})


  // About page route.
router.post("/register", async function (req, res) {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const new_user = new User({
        "name": req.body.name,
        "email": req.body.email,
        "password": hashedPassword,
        "contact": req.body.contact,
    })

    try {
        const dataToSave = await new_user.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = router;