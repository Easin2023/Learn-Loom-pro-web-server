const user = require("../modal/userModal");

const userRoleUpdate = async (req, res) => {
  try {
    const email = req.params.email;

    const update = await user.findOneAndUpdate(
      { email: email },
      { $set: { role: "teacher" } },
      { new: true }
    );
    if (update) {
      res.status(200).json({ success: true, user: update });
    } else {
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating name:", error);
  }
};

module.exports = userRoleUpdate;
