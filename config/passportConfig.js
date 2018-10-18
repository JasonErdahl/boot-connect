
const LocalStrategy = require('passport-local').Strategy;
var session = require("express-session")
const db = require('../models')

module.exports = function(app, passport) {
    var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, Password, done) {
      console.log(username)
      console.log(Password)
    db.Members.findOne({where:{loginID: username }}).then(function (member) 
    {
      console.log("Member---------- " + JSON.stringify(member))
      // if (err) { return done(err); }
      if (!member) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      console.log("---- " + typeof(Password))
      console.log("---- " + typeof(member.Password))
      if (Password !== member.Password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, member); 
    })
    .catch(err =>  {
       if (err) { return done(err); } ;})
  }
));

passport.serializeUser(function(user, done) {
  console.log("User----------" + JSON.stringify(user))
  console.log("Serialize------")
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("Deserialize-------")
  db.Members.findOne({where: {id: id}}).then( function (member)
  {
    done(null, member)
  })
});

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
return app 
}

