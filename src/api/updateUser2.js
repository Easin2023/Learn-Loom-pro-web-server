const user = require("../modal/userModal");


const updateMakeAdmin = async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id)

    const updateAdmin = await user.findByIdAndUpdate(
      id,
      { $set: { role: "admin" } },
      { new: true }
    );

    console.log(updateAdmin)
    if (updateAdmin) {
      res.status(200).json({ success: true, updateUser: updateAdmin });
    } else {
      res.status(404).json({ success: false, error: "User not found" });
    }
  } catch (error) {
    console.error("Error updating name:", error);
  }
};

module.exports = updateMakeAdmin;
