const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

// models
const UserModel = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, function (err, user) {
    done(err, user);
  });
});

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/callback"
//   },
//   async (accessToken, refreshToken, profile, done) => {

//     try{

//       // check if the user exists
//         const user = await UserModel.findOne({email: profile.emails[0].value});

//         if(user){
//           // return user a
//             done(null,user);
//         }
//         else{
//             // create a new user
//           const user = await UserModel.create({email: profile.emails[0].value});

//           // return user
//           done(null, user);
//         }

//     }
//     catch(error){
//         done(error, null)
//     }

//   }
// ));
