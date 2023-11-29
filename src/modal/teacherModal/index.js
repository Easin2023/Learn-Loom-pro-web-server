const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
     title: {
          type: String,
          require: true
     },
     name:{
          type: String,
          require: true
     },
     email: {
          type: String,
          require: true,
     },
     laval: {
          type: String,
          require: true
     },
     image: {
          type: String,
          require: true
     },
     category: {
          type: String,
          require: true
     },
     status: {
          type: String,
          require: true
     }
})


const requestCollection = mongoose.model("teacherRequest", userSchema);

module.exports = requestCollection;