var express = require("express");
var bodyParser = require("body-parser");
const routes = require("./routes");


var app = express();
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./models");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
  
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on localhost:" + PORT);
    });
  });

