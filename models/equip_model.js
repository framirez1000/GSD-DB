// File: ./models/equip_model.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var EquipModelSchema = new Schema({
  //id: {type: String, requiere: true},
  component_description: String,
  module: {type: String, requiere: true},
  location: String,
  subsystem: String,
  serial_number: {type: String, requiere: true},
  manufacturer: String,
  lti_code: {type: String, requiere: true},
  eli_component_code: {type: String, requiere: true},
  related_docs: [ {type: String}],
  date: String,
  user_id: String,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('EquipModel', EquipModelSchema );



