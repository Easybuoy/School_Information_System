const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    surname:{
    type: String,
    required: true
},
    first_name:{
        type: String,
        required: true
    },
    middle_name:{
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type:String,
    },
    address:{
        type: String,
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: String,
    }

});

const Student = module.exports = mongoose.model('Student', StudentSchema);