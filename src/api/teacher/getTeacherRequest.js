const requestCollection = require("../../modal/teacherModal");

const getTeacherRequest = async (req, res) => {
  try {
    const userEmail = req.params.email;
    // console.log(userEmail)
    const foundUser = await requestCollection.find({ email: userEmail });
    // console.log(foundUser);
    if (foundUser) {
      res.status(200).json({ success: true, user: foundUser });
    } else {
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = getTeacherRequest;