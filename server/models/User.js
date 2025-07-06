const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  profile_pic: DataTypes.STRING,
  status: DataTypes.STRING,
  is_online: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = User;
