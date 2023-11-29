const requestCollection = require("../../modal/teacherModal");

const getAllRequest = async (req, res) => {
  try {

    const allRequest = await requestCollection.find();

    res.status(200).json({ success: true, request: allRequest });
  } catch (error) {
    console.error("Error getting all sites:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = getAllRequest;