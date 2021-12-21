const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
var path = require('path');

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  
  if (req.body.roles) {
    var userRoles = req.body.roles.split(", "); 
    console.log('RolesArray: ' + userRoles + ' length: ' + userRoles.length);
    for (let i = 0; i < userRoles.length; i++) {
      //console.log('Roles: ' + req.body.roles + ' ROLES: ' + ROLES);
      if (!ROLES.includes(userRoles[i])) {
        res.render(path.join(__dirname, '../views/error'), {title: 'Error', message: 'Role(s) does not exist'});
        /*console.log('Roles: ' + userRoles[i] + ' ROLES: ' + ROLES);
        res.status(400).send({
          message: `Failed! Role ${userRoles[i]} does not exist!`
        });*/
        return;
      }
      else{
        console.log('Role: ' + userRoles[i] + ' found ');
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;

