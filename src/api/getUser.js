const user = require("../modal/userModal");

const getUserDatabase = async (req, res) => {
  try {
    const userEmail = req.params.email;

    // Find the user by email
    const foundUser = await user.findOne({ email: userEmail });

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

module.exports = getUserDatabase;
