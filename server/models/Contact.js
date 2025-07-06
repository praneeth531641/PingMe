const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Contact = sequelize.define("Contact", {
  user_id: DataTypes.INTEGER,
  contact_id: DataTypes.INTEGER,
});

module.exports = Contact;
