const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const MessageStatus = sequelize.define("MessageStatus", {
  message_id: DataTypes.INTEGER,
  recipient_id: DataTypes.INTEGER,
  status: {
    type: DataTypes.ENUM("sent", "delivered", "seen"),
    defaultValue: "sent",
  },
});

module.exports = MessageStatus;
