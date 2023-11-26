const user = require("../modal/userModal");

const setUserDatabase = async (req, res) => {

     const data = req.body;

     try {
          const userEmail = data.email;
      
          const updateOperation = {
            $set: {
              name: data.name,
              email: userEmail,
              role: data.role
            },
          };
      
          const options = {
            new: true,  
            upsert: true,  
            runValidators: true, 
          };
      
          const updatedUser = await user.findOneAndUpdate({ email: userEmail }, updateOperation, options);
      
          res.status(200).json({ success: true, user: updatedUser });
        } catch (error) {
          console.error('Error updating or creating user:', error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
     
}



module.exports = setUserDatabase;
