const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");

router.get("/me", auth, async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: ["id", "name", "email"],
  });

  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  res.json(user);
});

module.exports = router;
