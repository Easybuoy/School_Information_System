const express = require('express');
const router = express.Router();

const Student = require('../models/student');

//retrieving data
router.get('/students', function (req, res, next) {
    Student.find(function (err, student) {
        res.json(student)

    })
});


//add contacts
router.post('/student',function (req, res, next) {
//logic to add contact
    let newStudent = new Student({
        surname: req.body.surnname,
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,
        gender: req.body.gender,
        phone: req.body.phone,

    });
    newStudent.save(function (err, student) {
        if(err){
            res.json({msg: 'Failed to savea'});
        }
        else{
            res.json({msg: 'Student Added Successfully'});
        }
    })
});


//delete contacts
router.delete('/student/:id',function (req, res, next) {
//logic to delete contact
    Student.remove({_id:req.params.id},function (err, result) {
        if(err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});




module.exports = router;
