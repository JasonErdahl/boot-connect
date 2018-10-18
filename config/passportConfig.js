const LocalStrategy = require('passport-local').Strategy;
var session = require("express-session")
const db = require('../models')

module.exports = function(app, passport) {
    var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, Password, done) {
    db.Members.findOne({where:{loginID: username }}).then(function (member) 
    {
      if (!member) {
        return done(null, false, { message: 'Incorrect username.' });
      }
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
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
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

