
const LocalStrategy = require('passport-local').Strategy;
var session = require("express-session")
const db = require('../models')

module.exports = function(app, passport) {
    var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, Password, done) {
      console.log(username)
    db.Members.findOne({ UserName: username }, function (err, member) {
      if (err) { return done(err); }
      if (!member) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!member.validPassword(Password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, member); 



    });
  }
));
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
return app 
}

