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
     price: {
          type: Number,
          require: true
     },
     description: {
          type: String,
          require: true
     },
     img: {
          type: String,
          require: true
     },
     status: {
          type: String,
          require: true
     }
})


const classDataAdded = mongoose.model("addedClass", userSchema);

module.exports = classDataAdded