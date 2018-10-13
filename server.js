const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const AWS = require("aws-sdk");
var keys = require("./keys.js")


const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
  
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//AWS ======================
//Set region
AWS.config.update({ region: "REGION" });

// Create publish parameters
const params = {
  Message: "Hello Bootcamp!!!" /* required */,
  TopicArn: "arn:aws:sns:us-east-1:952591636899:Final_Project"
};

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
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on localhost:" + PORT);
    });
  });

