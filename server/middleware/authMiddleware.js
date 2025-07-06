const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "No token, access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Contains `id` or any payload you signed
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is invalid" });
  }
};

module.exports = authMiddleware;
