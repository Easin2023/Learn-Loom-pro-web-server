const classDataAdded = require("../../modal/postClass");

const getClassOne = async (req, res) => {
  try {
    const id = req.params.id;
    const find = await classDataAdded.findById(id);

    if (find) {
      res.status(200).json({ success: true, class: find });
    } else {
      res.status(404).json({ success: false, error: "class is not found" });
    }
  } catch (error) {
    console.error("Error getting site by ID:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = getClassOne;
