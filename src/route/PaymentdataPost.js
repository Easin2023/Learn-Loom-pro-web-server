var exports = require('express');
const paymentDB = require('../modal/PaymentDataModal');
var route = exports.Router();


route.get('/allPaymentData', async (req, res) => {
     try {
          const allPayment = await paymentDB.find();
          console.log(allPayment)
      
          res.status(200).json({ success: true, payment: allPayment });
        } catch (error) {
          console.error("Error getting all sites:", error);
          res.status(500).json({ success: false, error: "Internal Server Error" });
        }
})

route.get('/getPaymentData/:email', async (req, res) => {
     try{
          const email = req.params.email;
          const findData = await paymentDB.findOne(email);
          if(find){
               res.send({success: true, data: findData})
          }else{
               res.send({success: false, data: "not found"})
          }
     }catch(err){
          console.log(err.massage)
     }
})

route.post('/paymentDataPost', async (req, res) => {
     try {
          const addedInfo = req.body;
      
          const newSite = new paymentDB(addedInfo);
      
          const savedPayment = await newSite.save();
      
          res.status(201).json({ success: true, payment: savedPayment });
        } catch (error) {
          console.error('Error adding site data:', error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
})


module.exports = route;