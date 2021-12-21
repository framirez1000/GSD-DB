var express = require('express');
var authRoutes = require('./authRoutes');
var usersRoutes = require('./user.routes');
var eqRouter = require('./equipmentRoutes');

const router = express.Router();

// Home page
router.get('/', function(req, res, next) {
    res.redirect('/gbs_equipment');
});

// Requests for .... re-using method and the body of the original request to add a component
router.use('/gbs_equipment', eqRouter);

// Requests for Documents re-using method and the body of the original request
router.use('/postpdf', eqRouter);

// Requests for users: add, modify, delete
router.use('/user', usersRoutes);

// Requests for authenticatio: login, logout
router.use('/auth', authRoutes);
  
module.exports = router;