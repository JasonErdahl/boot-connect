//This is the model for setting up mysql table via sequelize
module.exports = function(sequelize, DataTypes) {
  var DashBoardJobs = sequelize.define("DashBoardJobs", {
    url:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    body:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    createDate: DataTypes.DATEONLY
  });
  return DashBoardJobs;
};
