//we will need to add a few routes for the application, including: /login /logout' /callback and /user. We will also need template files for login and user.

//^^ from autho0 stuff

var express = require('express');
var db = require('../models');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

router.get('/login',
    function(req, res) {
        res.render('login', { env: process.env });
    });

// Perform session logout and redirect to homepage
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
router.get('/callback',
    passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
    function(req, res) {
        res.redirect(req.session.returnTo || '/user');
    });

router.get('/', ensureLoggedIn, function(req, res, next) {
    res.render('user', { user: req.user });
});

module.exports = router;
