const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');

const User = require('../models/Users');
const Contact = require('../models/Contacts');

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// @route   POST api/contacts
// @desc    Add new contacts
// @access  Private
router.post('/', (req, res) => {
    res.send('Add a contact');
});


// @route   Put api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});



// @route   Delete api/contacts/:id
// @desc    Delete contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;