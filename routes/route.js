const express = require('express');
const router = express.Router();

const Student = require('../models/student');

//retrieving data
router.get('/students', function (req, res, next) {
    Student.find(function (err, students) {
        res.json(students)

    })
});


//add student
router.post('/student',function (req, res, next) {
//logic to add contact
    var newStudent = new Student(req.body);
    newStudent.save(function (err) {
        if(err){
            res.json({msg: 'Failed To Add Student'});
        }
        else{
            res.json({msg: 'Student Added Successfully'});
        }
    })
});


//delete student
router.delete('/student/:id',function (req, res, next) {
//logic to delete contact
    Student.remove({_id:req.params.id},function (err, result) {
        if(err){
            res.json({msg: 'Failed To Delete Student'});
        }
        else {
            res.json({msg: 'Student Deleted Successfully'});
        }
    })
});

//update student
router.put('/student/:id', function (req, res, next) {
    Student.update({_id:req.params.id}, req.body, function (err, result) {
        if(err){
            res.json({msg: 'Failed To Update Student'});
        }else{
            res.json({msg: 'Student Updated Successfully'});
        }
    })
});



module.exports = router;
