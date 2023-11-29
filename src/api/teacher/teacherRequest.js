const requestCollection = require("../../modal/teacherModal");

const teacherRequestData = async (req, res) => {
     try {
          const newRequest = new requestCollection({
              title: req.body.title,
              name: req.body.name,
              email: req.body.email,
              laval: req.body.laval,
              image: req.body.image,
              category: req.body.category
          });
  
          const savedRequest = await newRequest.save();
  
          res.status(201).json({ success: true, teacherRequest: savedRequest }); 
      } catch (error) {
          res.status(500).json({ message: error.message });
      }
}

module.exports = teacherRequestData;