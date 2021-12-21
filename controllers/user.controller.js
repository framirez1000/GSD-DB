var path = require('path');

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.guestBoard = (req, res) => {
  res.status(200).send("Guest Content.");
};

exports.add_user = async (req, res) => {
  res.render(path.join(__dirname, '../views/add_user'), {title: 'Add user', user: req.user});
  //res.status(200).send("Guest Content.");
};

exports.remove_user = async (req, res) => {
  res.render(path.join(__dirname, '../views/error'), {title: 'GBS BD', message: 'Unauthorized to see this page! ', user: req.user});
  //res.status(200).send("Guest Content.");
};

exports.modify_user = async (req, res) => {
  res.render(path.join(__dirname, '../views/error'), {title: 'GBS BD', message: 'Unauthorized to see this page! ', user: req.user});
  //res.status(200).send("Guest Content.");
};
