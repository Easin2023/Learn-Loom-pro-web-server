const requestCollection = require("../../modal/teacherModal");

const update = async (req, res) => {
     try {
          const itemId = req.params.id;
          console.log(itemId);
          const newData = req.body; 
          console.log(newData)
          const updatedItem = await requestCollection.findByIdAndUpdate(itemId, newData, { new: true });
      
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

module.exports = update;