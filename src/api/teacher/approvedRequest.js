const requestCollection = require("../../modal/teacherModal");

const requestApproved = async (req, res) => {
     try {
          const email = req.params.email;

          const updatedItem = await requestCollection.findOneAndUpdate({email: email}, {$set: {"status": "approved"}}, { new: true });
      
          if (updatedItem) {
            res.status(200).json({ success: true, updatedItem });
          } else {
            res.status(404).json({ success: false, error: 'Item not found' });
          }
        } catch (error) {
          console.error('Error updating data:', error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
}

module.exports = requestApproved;