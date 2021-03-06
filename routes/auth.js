var express = require('express');
var passport = require('passport');



var router = express.Router();


router.route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect: '/users/',
    failure: '/error/'
  }));

router.route('/google')
  .get(passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email']

}));

router.route('/facebook')
  .get(passport.authenticate('facebook', {
    scope: ['email','public_profile']

}));

router.route('/facebook/callback')
  .get(passport.authenticate('facebook', {
    successRedirect: '/users',
    failure: '/error/'
  }));

router.route('/twitter')
  .get(passport.authenticate('twitter', {
    scope: ['email']

}));

router.route('/twitter/callback')
  .get(passport.authenticate('twitter'));
module.exports = router;
