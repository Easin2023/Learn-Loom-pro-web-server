const express = require("express");
const applyMiddleware = require("./middlewares");
const connectDB = require("./db/connectDB");
const app = express();
require("dotenv").config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET)
const port = process.env.PORT || 5000;




const userDataCreate = require("./route/setUser/index")
const classDataSave = require("./route/postClass/index.js")
const teacherRequest = require("./route/teacherRequest/teacherRequest.js")
const payment = require("./route/payment.js")
const paymentPost = require("./route/PaymentdataPost.js")



applyMiddleware(app)


app.use((req, res, next) => {
  console.log(req.url)
  next();
})
app.use(userDataCreate);
app.use(paymentPost);
app.use(classDataSave)
app.use(teacherRequest)
app.use(payment)


app.get("/", (req, res) => {
  res.send("is server is running...........");
});

app.all("*", (req, res, next) => {
  const error = new Error(`this route is invalid ${req.url}`);
  error.status=404;
  next(error);
});

app.use((err, req, res, next) => {
     // res.send("error")
  res.status(err.status || 500).json({
    massage: err
  });
});

// const main = async () => {
//   await connectDB()
//   app.listen(port, () => {
//     console.log(`server is running ${port}`);
//   });
// }

// main();

module.exports = app