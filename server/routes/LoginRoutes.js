const express = require("express");
const router = express.Router();
const {
  authSuccess,
  authFailure,
} = require("../controllers/Login");
const passport = require('passport');


// Router routes
router.get(
  "/auth",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/auth/callback", 
    passport.authenticate( 'google', {
        successRedirect: '/api/auth/callback/success',
        failureRedirect: '/api/auth/callback/failure'
    })
);
router.route("/auth/callback/success").get(authSuccess);
router.route("/auth/callback/failure").get(authFailure);

module.exports = router;
