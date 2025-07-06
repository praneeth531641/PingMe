const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Chat = sequelize.define("Chat", {
  name: DataTypes.STRING,
  is_group: { type: DataTypes.BOOLEAN, defaultValue: false },
  created_by: DataTypes.INTEGER,
});

module.exports = Chat;
