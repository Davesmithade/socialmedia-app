const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
name: {
    type: String,
    trim: true,
    require: [true,'a user must have name'],  
},
email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: [true,'a user must have an email'],
    unique: true
},
password: {
    type: String,
    required: [true,"Password is required"]
   }
},{timestamps: true})


const User = mongoose.model('User',userSchema)


module.exports = User