var express = require('express');
var router = express.Router();
const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
var path = require('path');

/*router.get("/user/add", [authJwt.verifyToken, authJwt.isAdmin], function(req, res, next) {
    console.log("Redirecting to sign-up");
    res.render(path.join(__dirname, '../views/add_user'), {title: 'Add user', user: req.user});
  });
router.post(
    "/user/add_user",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted, authJwt.isAdmin
    ],
    controller.signup
  );*/
router.get("/signin", function(req, res, next) {
    console.log("Redirecting to sign-in");
    res.render('signin', {title: "Sign in", visibility: 'visibility: hidden'});
  });

router.post("/signin", [authJwt.validateLogin], controller.signin);
router.get("/logout", controller.logout);

module.exports = router;