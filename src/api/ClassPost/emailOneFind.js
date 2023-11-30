const classDataAdded = require("../../modal/postClass");


const findOneEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const find = await classDataAdded.find({email: email });

    if (find) {
      res.status(200).json({ success: true, data: find });
    } else {
      res.status(404).json({ success: false, error: "class is not found" });
    }
  } catch (error) {
    console.error("Error getting site by ID:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = findOneEmail;