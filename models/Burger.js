"use strict";

module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define("BurgerTable", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: false
    },
    date:{
    	type: DataTypes.DATE,
    	allowNull: true,
      default: DataTypes.NOW
    }
    // ,
    // customer_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   default: "User",
    //   validate: {
    //     len: [1]
    //   }
    // }
  }, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,

}
  );
  return Burger;
};