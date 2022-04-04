const express = require('express');
const router = express.Router();
const PhonebookContact = require('../model/phonebookContact');

//Routes
router.get('/', (req, res) => {
    const data = {
        fullname: 'Matthew Commerford',
        PhoneNumber: '0664779867'
    };

    PhonebookContact.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        });
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newContact = new PhonebookContact(data);

    newContact.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server error.' })
        } else {
            res.json({
                msg: 'Data has been saved successfully.'
            });
        }
    });
});

module.exports = router;