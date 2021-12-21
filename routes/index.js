var express = require('express');
var auth = require('./auth.routes');
var usersRoutes = require('./user.routes');
var eqRouter = require('./gbs_equipment');
var router = express.Router();


//router.get('/user', usersRoutes);


//eqRouter.use('/gbs_equipment', equipRouter);  // Add equipment routes to middleware chain.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/gbs_equipment');
});
/*router.get('/gbs_equipment', function(req, res, next) {
  res.redirect(307,'/gbs_equipment');
});*/
router.post('/', function(req, res, next) {
  console.log('Receiving');
  res.redirect(307, '/gbs_equipment');
});
router.post('/postpdf', function(req, res, next) {
  console.log('Receiving');
  res.redirect(307, '/gbs_equipment/postpdf');
});

module.exports = router;


