const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ChatParticipant = sequelize.define("ChatParticipant", {
  chat_id: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
  joined_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = ChatParticipant;
