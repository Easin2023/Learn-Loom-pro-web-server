const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
     name:{
          type: String,
          require: true
     },
     email: {
          type: String,
          require: true,
     },
     role: {        
          type: String,
          require: true
     },
     img: {
          type: String,
          require: true
     }
})


const user = mongoose.model("userDB", userSchema);

module.exports = user

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;