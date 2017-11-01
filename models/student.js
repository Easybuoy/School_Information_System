const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    surname:{
    type: String,
    required: true
},
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: String,
    },
    department:{
        type: String,
        required: true
    },
    course:{
        type:String,
        required: true
    },
    level:{
        type: Number,
        required: true
    },
    year_enrolled:{
        type: Number,
        required: true
    }

});

const Student = module.exports = mongoose.model('Student', StudentSchema);