var exports = require('express');
var route = exports.Router();
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET)


route.post('/create-payment-intent', async (req, res) => {

     try{
          const {price} = req.body;

          console.log(price);
          const amount = parseInt(price * 100)
          const paymentIntent = await stripe.paymentIntents.create({
               amount: amount,
               currency: 'usd',
               payment_method_types: ["card"]
          })

          if(paymentIntent){
               res.send({
                    clintSite: paymentIntent.client_secret
               })
          }else{
               res.send('not is cod error')
          }
     }catch(err){
          console.log(err)
     }

} )

module.exports = route;