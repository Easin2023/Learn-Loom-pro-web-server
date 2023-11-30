var exports = require('express');
const paymentDB = require('../modal/PaymentDataModal');
var route = exports.Router();


route.get('/getPaymentData/:email', async (req, res) => {
     try{
          const email = req.params.email;
          const find = await paymentDB.findOne(email);
          if(find){
               res.send({success: true, data: find})
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