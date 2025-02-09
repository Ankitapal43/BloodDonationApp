const express = require("express");
const router = express.Router();

const Doner = require('../model/Doner')

// Home page route.
router.get("/", function (req, res) {
    res.send("Doner home page");
  });

  // About page route.
router.post("/donate", async function (req, res) {
    const new_doner = new Doner({
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        "date_time": req.body.date_time,
        "blood_group": req.body.blood_group,
        "doctor": req.body.doctor,
        "message": req.body.message,
    })

    try {
        const dataToSave = await new_doner.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

module.exports = router;