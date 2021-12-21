var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const cors = require("cors");

// Routes
var indexRouter = require('./routes/indexRoutes');
//var usersRouter = require('./routes/users');
//var equipRouter = require('./routes/gbs_equipment');  //Import routes for "equipment"

//var authRouter = require('./routes/auth.routes');
//var userRouter = require('./routes/user.routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var corsOptions = {
  //origin: "http://localhost:8081"
  origin: true, credentials: true 
};
app.use(cors(corsOptions));

//require('./routes/user.routes')(app);
/****Set up mongoose connection********** moved to www
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/gbs_equip_db';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(bodyParser({uploadDir: './public/pdfs'}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(indexRouter);
//app.use('/users', usersRouter);
//app.use('/gbs_equipment', equipRouter);  // Add equipment routes to middleware chain.
//app.use('/signin', authRouter);
//app.use('/user/role', userRouter);

//require('./routes/auth.routes')(app);
//require('./routes/user.routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'GSD-CDB', message: 'Unauthorized! ', visibility: 'visibility: hidden'});
});

module.exports = app;
