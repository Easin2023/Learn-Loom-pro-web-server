const classDataAdded = require('../../modal/postClass');


const classDelete = async (req, res) => {
     try {
          const id = req.params.id
      
      
          const dataDelete = await classDataAdded.deleteOne({_id: id});
      
          if (dataDelete) {
               console.log('Document deleted successfully');
               res.status(200).json({ success: true, message: 'Document deleted successfully' });
             } else {
               console.log('Document not found');
               res.status(404).json({ success: false, error: 'Document not found' });
             }
        } catch (error) {
          console.error('Error adding site data:', error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
}

module.exports = classDelete;