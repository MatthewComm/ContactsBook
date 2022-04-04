const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const PhonebookContactSchema = new Schema({
    name: String,
    PhoneNumber: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const PhonebookContact = mongoose.model('PhonebookContact', PhonebookContactSchema);

module.exports = PhonebookContact;