const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
  // Local Strategy
  passport.use(new LocalStrategy(function(username, password, done){
    // Match Username
    let query = {username:username};
    User.findOne(query, function(err, user){
      if(err) console.log("username passpoer");
      if(!user){
        console.log("no user found")
        return done(null, false, {loggdin: false});
      }

      // Match Password
      bcrypt.compare(password, user.password, function(err, isMatch){
        if(err) console.log("password pasport");
        if(isMatch){
          return done(null, user);
        } else {
          console.log("wrong password")
          return done(null, false, {loggdin: false});
        }
      });
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}