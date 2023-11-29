const classDataAdded = require("../../modal/postClass");

const sortFewClassData = async (req, res) => {
  try {
    const sortData = await classDataAdded
      .find()
      .sort({ TotalEnrolment: -1 })
      .limit(6);
    res.status(200).json({ success: true, fewClass: sortData });
  } catch (error) {
    console.error("Error getting recommended classes:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = sortFewClassData;