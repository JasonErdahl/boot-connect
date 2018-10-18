require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const AWS = require("aws-sdk");
const keys = require("./keys.js")
const passport = require('passport')
const env = require('dotenv').load()

const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");

// Define middleware here
require('./config/passportConfig.js')(app, passport)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
  
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//AWS ======================
//Set region
AWS.config.update({ region: "us-east-1" });
console.log('PROCESS.ENV.AWS '+ process.env);
// Create publish parameters
const params = {
  Message: "Hello Bootcamp!!!" /* required */,
  TopicArn: "arn:aws:sns:us-east-1:952591636899:Final_Project"
};
console.log(JSON.stringify(keys.AWS));
// Create promise and SNS service object
const snsPromise = new AWS.SNS(keys.AWS)
  .publish(params)
  //.subscribe to interact and new 
  .promise();
// Handle promise's fulfilled/rejected states
snsPromise
  .then(function(data) {
    console.log(
      `Message ${params.Message} send sent to the topic ${params.TopicArn}`
    );
    console.log("MessageID is " + data.MessageId);
  })
  .catch(function(err) {
    console.error(err, err.stack);
  });


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on localhost:" + PORT);
    });
  });



  