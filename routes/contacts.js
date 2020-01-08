const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.post('/', (req, res) => {
    res.send('Get all contacts');
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