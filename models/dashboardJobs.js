//This is the model for setting up mysql table via sequelize
module.exports = function(sequelize, DataTypes) {
  var DashBoardJobs = sequelize.define("DashBoardJobs", {
    jobTitle:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobCompany:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobLocation:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobURL:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    jobNotes:
    {
      type: DataTypes.STRING,
      allowNull: true
    }  
  });
  return DashBoardJobs;
};
