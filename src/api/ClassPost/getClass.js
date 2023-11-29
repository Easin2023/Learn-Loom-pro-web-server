const classDataAdded = require("../../modal/postClass");

const getTheClassData = async (req, res) => {
  try {
    // Find all documents in the Site collection
    const allClass = await classDataAdded.find();

    res.status(200).json({ success: true, sites: allClass });
  } catch (error) {
    console.error("Error getting all sites:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = getTheClassData;
