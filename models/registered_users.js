var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    username: {type: String, required: true, maxlength: 16},
    pswd: {type: String, required: true, maxlength: 16},
  }
);

//Export model
module.exports = mongoose.model('OldUser', UserSchema);

