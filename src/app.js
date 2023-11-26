const express = require("express");
const applyMiddleware = require("./middlewares");
const connectDB = require("./db/connectDB");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;




const userDataCreate = require("./route/setUser/index")


applyMiddleware(app)



app.use(userDataCreate);



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

const main = async () => {
  await connectDB()
  app.listen(port, () => {
    console.log(`server is running ${port}`);
  });
}

main();
