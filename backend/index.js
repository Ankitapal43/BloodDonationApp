require('dotenv').config();

const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use(cors({
    origin: '*'
}))

const contactrouter = require('./controller/contact_controller')

app.use('/contact', contactrouter)

const userrouter = require('./controller/user_controller')

app.use('/user', userrouter)

const donerrouter = require('./controller/doner_controller')

app.use('/doner', donerrouter)

app.get("/", function (req, res) {
    res.send("BloodDonation home page");
  });

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})