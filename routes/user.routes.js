var express = require('express');
var router = express.Router();
const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
const {add_user, remove_user, modify_user} = controller;
var path = require('path');

router.get('/add', [authJwt.verifyToken, authJwt.isAdmin], add_user);
router.post('/add_user', [authJwt.verifyToken, authJwt.validateSignUp, verifySignUp.checkDuplicateUsernameOrEmail,
  verifySignUp.checkRolesExisted, authJwt.isAdmin], authController.signup);
router.get('/remove', [authJwt.verifyToken, authJwt.isUser], remove_user);
router.get('/modify', [authJwt.verifyToken, authJwt.isUser], modify_user);

module.exports = router;

/*module.exports = function(app) {
  var req = {};
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    //console.log("Auth-token: " + req.cookies['x-access-token']);
    //console.log(req);
    req = req;
    next();
    
  });

  app.get("/user/remove", controller.remove_user);
  app.get("/user/modify", controller.modify_user);
  
  //app.get("/api/test/all", controller.allAccess);
  //console.log("Auth-token2: " + req.headers['x-access-token']);
  //app.get("/api/test/guest", [authJwt.verifyToken], controller.userBoard);
  //app.get("/api/test/guest", controller.userBoard);

  /*app.get(
    "/api/user",
    [authJwt.verifyToken, authJwt.isUser],
    controller.moderatorBoard
  );*/

  /*app.get(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};*/

