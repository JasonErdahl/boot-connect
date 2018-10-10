//This is the model for setting up mysql table via sequelize
module.exports = function(sequelize, DataTypes) {
  var DashboardMessages = sequelize.define("DashboardMessages", {
    body:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    createDate: DataTypes.DATEONLY
  });
  return DashboardMessages;
};
