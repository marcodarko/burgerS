module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define("burgerTable", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devourded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    date:{
    	type: DataTypes.DATE,
    	allowNull: false,
      default: DataTypes.NOW
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
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