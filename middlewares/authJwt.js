const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const authentication = require('../validations/authentication');
const helpers = require('../helpers/misc');
const db = require("../models");
const redisClient = require('../config/redisConfig');

const User = db.user;
const Role = db.role;
var util = require('util');
var path = require('path');

const {login, signup, addupComponent} = authentication;
const {returnErrorMessages} = helpers;

verifyToken = (req, res, next) => {
  let token = req.cookies["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  try {
    token = token.split(' ').pop();
    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;
    req.user = decoded.user;
    //console.log('User token: ' + decoded.user);
    if (!decoded.user) {
      res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Unauthorized! Login again', visibility: 'visibility: hidden'});
    }
    
    return redisClient.smembers('token',  async (err, tokensArray) => {
      if (err){
        return res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Error, Login again', visibility: 'visibility: hidden'});
      }
      if (tokensArray.includes(token)) {
        return res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Unauthorized, Login again', visibility: 'visibility: hidden'});
      }
      return next();
    });
    /*jwt.verify(token, config.secret, (err, decoded => {
      console.log('Token verify');
      if (err) {
        console.log('Token error in verify: ' + err);
        res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Unauthorized! Session expired, login again', visibility: 'visibility: hidden'});
        //return res.status(401).send({ message: "Unauthorized! Session expired" });
        //return res.redirect('/', {title: 'Session expired, login again'});
      }
      req.userId = decoded.id;
      req.user = decoded.user;
      //console.log('User token: ' + decoded.user);
      if (!decoded.user) {res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Unauthorized! Login again', visibility: 'visibility: hidden'});}
      return redisClient.smembers('token', async (err, tokensArray => {
        if (err){
          res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Session expired, Login again', visibility: 'visibility: hidden'});
        }
        if (tokensArray.includes(token)) {
          res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Unauthorized, Login again', visibility: 'visibility: hidden'});
        }
        next();
      }));
    }));*/
  } catch (error) {
    console.log('Error User token: ' + error);
    res.render(path.join(__dirname, '../views/error'), {title: 'GSD-CDB', message: 'Error! Login again: ' + error , visibility: 'visibility: hidden'});
  }
  
};

isAdmin = (req, res, next) => {
  User.find({username : req.cookies['user']}).exec((err, user) => {
    /*console.log('User: ' + req.body.loggeduser + ' User: ' + user);
    console.log('Inspect: ' + util.inspect(user[0].roles));*/
    if (err || user.length == 0) {
      res.render(path.join(__dirname, '../views/error'), {title: 'Warning:', message: 'user not found!', error: err});
      //res.status(500).send({ message: err });
      return;
    }
    //console.log('User.Roles: ' + user[0].roles);
    Role.find(
      {
        _id: { $in: user[0].roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        //console.log('UserRoles: ' + roles);
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
        //console.log('UserRoles: ' + roles);
        res.render(path.join(__dirname, '../views/error'), {title: 'Warning:', message: 'Require Admin Role!', user: req.user });
        //res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

isUser = (req, res, next) => {
  if (req.cookies['user']){
    User.find({username : req.user}).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      Role.find({ _id: { $in: user[0].roles } },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "user") {
              next();
              return;
            }
          }
          res.render(path.join(__dirname, '../views/error'), {title: 'Warning:', message: 'Require User Role!', user: req.user });
          //res.status(403).send({ message: "Require user Role!" });
          return;
        }
      );
    });
  }
  else {
    res.render(path.join(__dirname, '../views/error'), {title: 'Warning:', message: 'Require User log-in!'});
  }
};

checkUserToken = async (req, res, next) => {
  let token = req.get('authorization');
  if (!token) {
    return errorResponse(res, badRequest, invalidRequest);
  }
  try {
    token = token.split(' ').pop();
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.cookies['user'] = decodedToken;
    /*return redisClient.smembers('token', async (err, tokensArray) => {
      if (err) {
        return errorResponse(res, serverError, err.message);
      }
      if (tokensArray.includes(token)) {
        return errorResponse(res, unauthorized, invalidToken);
      }
      const { user } = decodedToken;
      const condition = { user };
      const userData = await findByCondition(User, condition);
      req.userData = userData.dataValues;
      next();
    });*/
    next();
  } catch (error) {
    res.render(path.join(__dirname, '../views/error'), {title: 'Warning:', message: 'Invalid session!'});
    //return errorResponse(res, badRequest, invalidToken);
  }
};

const validateLogin = async (req, res, next) => {
  const { error } = login(req.body);
  //console.log('Validation passw: ' + error);
  returnErrorMessages(error, {page: 'signin', title: 'Login'}, res, next);
};

const validateSignUp = async (req, res, next) => {
  const { error } = signup(req.body);
  //console.log('Validation passw: ' + error);
  returnErrorMessages(error, {page: 'add_user', title: 'Add-User'}, res, next);
};

const validateCompData = async (req, res, next) => {
  const { error } = addupComponent(req.body);
  //console.log('Validation add_comp: ' + error);
  returnErrorMessages(error, {page: 'add_component', title: 'Add-Component'}, res, next);
};

const authJwt = {
  verifyToken,
  isAdmin,
  isUser,
  checkUserToken,
  validateLogin,
  validateSignUp,
  validateCompData
};
module.exports = authJwt;

