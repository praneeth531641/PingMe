const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Message = sequelize.define("Message", {
  chat_id: DataTypes.INTEGER,
  sender_id: DataTypes.INTEGER,
  content: DataTypes.TEXT,
  message_type: {
    type: DataTypes.ENUM("text", "image", "file", "audio"),
    defaultValue: "text",
  },
  media_url: DataTypes.STRING,
});

module.exports = Message;
