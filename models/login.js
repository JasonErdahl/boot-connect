//This is the model for setting up mysql table via sequelize
module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
    UserName:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    createDate: DataTypes.DATEONLY
  });
  return Login;
};
