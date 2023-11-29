const classDataAdded = require('../../modal/postClass');


const classData = async (req, res) => {
     try {
          const addedInfo = req.body;
      
          const newSite = new classDataAdded(addedInfo);
      
          const savedClass = await newSite.save();
      
          res.status(201).json({ success: true, class: savedClass });
        } catch (error) {
          console.error('Error adding site data:', error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
}

module.exports = classData;