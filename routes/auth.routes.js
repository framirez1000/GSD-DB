const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
var equip_controller = require('../controllers/equipController');
var path = require('path');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  /*app.get("/user/add", [authJwt.verifyToken, authJwt.isAdmin], function(req, res, next) {
    console.log("Redirecting to sign-up");
    res.render(path.join(__dirname, '../views/add_user'), {title: 'Add user', user: req.user});
  });*/
  app.post(
    "/user/add_user",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted, authJwt.isAdmin
    ],
    controller.signup
  );
  app.get("/signin", function(req, res, next) {
    console.log("Redirecting to sign-in");
    res.render('signin', {title: "Sign in", visibility: 'visibility: hidden'});
  });
  app.post("/signin", controller.signin);
  app.get("/logout", controller.logout);
  //app.get('/', equip_controller.index);
};

