const classDataAdded = require("../../modal/postClass");

const classFindOneAndUpdate = async (req, res) => {
  try {
    const id = req.params.id;

    const update = await classDataAdded.findByIdAndUpdate(
      { _id: id },
      { $set: { status: "approved" } },
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

module.exports = classFindOneAndUpdate;
