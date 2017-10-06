const express = require('express');
const router = express.Router();

//retrieving data
router.get('/students', function (req, res, next) {
    res.send('Retrieved Students');
});


//add contacts
router.post('/student',function (req, res, next) {
//logic to add contact
});


//delete contacts
router.delete('/student/:id',function (req, res, next) {
//logic to delete contact
});




module.exports = router;
