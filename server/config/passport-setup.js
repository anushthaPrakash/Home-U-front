const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser((user, done)=>{
  done(null, user.id)
})


passport.deserializeUser((user, done)=>{
  done(null, user.id)
})


passport.use(new GoogleStrategy({
    clientID:"398387829285-nvda41mdgefojia38vpck97p19n5qaoq.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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", // Your Credentials here.
    callbackURL:"http://localhost:3000/api/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log("THis is profile", profile)
    return done(null, profile);
  }
));