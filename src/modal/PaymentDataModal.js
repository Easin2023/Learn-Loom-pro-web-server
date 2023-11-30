const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
     params: {
          type: String,
          require: true
     },
     name: {
          type: String,
          require: true
     },
     email: {
          type: String,
          require: true
     }
})


const paymentDB = mongoose.model("paymentData", userSchema);

module.exports = paymentDB