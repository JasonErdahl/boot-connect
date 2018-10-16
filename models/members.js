//This is the model for setting up mysql table via sequelize
module.exports = function(sequelize, DataTypes) {
  var Members = sequelize.define("Members", {
    loginID:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    emailAddress:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    professionalURL:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    githubURL:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedinURL:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    jobStatus:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    jobLocation:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    subscriber:
    {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    profileIMG:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    createDate: DataTypes.DATEONLY
  });
  return Members;
};
