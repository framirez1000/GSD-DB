const config = require("../config/auth.config");
var path = require('path');
var util = require('util');
const redisClient = require('../config/redisConfig');

const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var async = require('async');

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    first_name: req.body.firstName,
    family_name: req.body.lastName,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    
    if (req.body.roles) {
      var userRoles = req.body.roles.split(', ');
      Role.find(
        {
          name: { $in: userRoles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          console.log('Roles to insert: ' + roles);
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            res.render(path.join(__dirname, '../views/error'), {title: 'GBS BD', message: 'registered successfully'});
            //res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "guest" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully as a guest!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err + user});
        
        //console.log("login error: " + req.body.username);
        return;
      }

      if (!user) {
        //console.log(" Password: " + bcrypt.hashSync(req.body.password, 8));
        return res.sendFile('/loginUserFailed.html', {root: path.join(__dirname, '../public') });
        //return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync( req.body.password, user.password );

      if (!passwordIsValid) {
        //console.log("Invalid passwords: " + req.body.password + " --- " + user.password);
        //console.log(bcrypt.hashSync(req.body.password, 8) + " --- " + (user.password));
        return res.sendFile('/loginPasswordFailed.html', {root: path.join(__dirname, '../public') });
        
        /*return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });*/
      }

      var token = jwt.sign({ id: user.id, user: req.body.username }, config.secret, {
        expiresIn: 2000 //43200 // 12 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      //console.log('Passwords: ' + bcrypt.hashSync(req.body.password, 8) + " --- " + bcrypt.hashSync(user.password, 8));
      //console.log("login successfull, passwords: "  + req.body.password + " --- " + user.password);
      //res.render('index', { title: 'GBS equipment DB'});
      //res.redirect('index');
      //res.sendFile('/layout.html', {root: __dirname });
      /*res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });*/
      //console.log("Token: " + token);
      res.cookie('x-access-token', token, {
          httpOnly: true,
          sameSite: "strict",
      });
      res.cookie('user', req.body.username, {
          httpOnly: true,
          sameSite: "strict",
      });
      //res.sendFile('/loginSuccess.html', {root: __dirname });
      res.setHeader('authorization', token);
      //console.log('Created headers: ' + JSON.stringify(req.headers));
      //res.status(200).send({ token: token });
      return res.redirect('/gbs_equipment/home');
    });
};

exports.logout = (req, res) => {
  //console.log(JSON.stringify(req.headers));
  const expToken = req.cookies["x-access-token"];
  //const expToken = req.get('authorization').split(' ').pop();
  //console.log('Expired token: ' + expToken);
  //let expToken = req.cookies["x-access-token"];
  redisClient.sadd('token', expToken);
  res.cookie('x-access-token', "logout");
  res.cookie('user', "");
  res.sendFile('logoutSuccess.html', {root: path.join(__dirname, '../public') });
};



