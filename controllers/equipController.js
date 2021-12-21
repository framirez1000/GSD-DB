const { body,validationResult } = require("express-validator");
var Equipment = require('../models/equip_model');
var Users = require('../models/user.model');
var fs = require('fs'); //require filesystem module 
var url = require('url');
var multer  = require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/pdfs',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname.split(" ").join(""));
        }
    }
);
var upload = multer( { storage: storage } );
var path = require('path');

var async = require('async');

exports.index = function(req, res) {
  res.sendFile('layout.html', {root: path.join(__dirname, '../public') } );
  //res.end();
};
exports.home = function(req, res) {
    //res.render('index', { title: 'GBS equipment DB' });
    var equip = new Equipment({
                            id: 'jhnk',
                            component_code: 'bhjjk',
                            module: 'jhbhjk',
                            component_description: 'ferf',
                            location: 'frfe',
                            subsystem: 'grefre',
                            reference_code: 'refer',
                            serial_number: 'grefer',
                            manufacturer: 'wfewew',
                            related_docs: 'fwefw',
                            user_id: 'fewfwef'
    }); 
    var user = new Users({
                            first_name: 'jhnk',
                            family_name: 'bhjjk',
                            username: 'jhbhjk',
                            pswd: 'ferf'
    }); 
    async.parallel({
        components_count: function(callback) {
            Equipment.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        users_count: function(callback) {
            Users.countDocuments({}, callback);
        },
        components_list: function(callback) {
            Equipment.find({}, callback);
        },
        /*insert_component: function() {
            equip.save(function (err) {
               if (err) { return next(err); }
               // Genre saved. Redirect to genre detail page.
               // res.render('index', { title: 'GBS equipment DB error', error: err });
               user.save();
               console.log('Inserted: ' + equip.id);
               console.log('Inserted: ' + user.first_name);
               return;
             });
            return;
        }*/

    }, function(err, results) {
        res.render('index', { title: 'GSD equipment DB', error: err, data: results, user: req.user });
    });
};

//***** Display list of all Equipment.*****/
exports.equip_list = function(req, res) {
    //console.log("done");
    async.parallel({
        components_list: function(callback) {
            Equipment.find({}, callback);
        },
        
    }, function(err, results) {
        //console.log("Equipment list done");
        //console.log("Docs: " + results.components_list);
        if (err) {console.log('Error list: ' + err);}
        res.render('component_list', { title: 'GBS equipment list', error: err, data: results, user: req.user });
    });
};

// Display detail page for a specific Component.
exports.equip_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Component detail: ' + req.params.id);
};

// Display Component adding form on GET.
exports.equip_add_get = function(req, res) {
    //res.send('NOT IMPLEMENTED: Equipement create GET');
    res.render('add_component', { title: 'Add component to GBS equipment list', user: req.user });
};

// Handle Equipment create on POST.
//exports.equip_create_post = function(req, res) {
    //res.send('NOT IMPLEMENTED: Component create POST');
    
    // Handle Author create on POST.
exports.equip_create_post = [
    
    // Validate and sanitise fields.
    body('comp_description').trim().escape(),
    body('module').trim().escape(),
    body('location').trim().escape(),
    body('subsystem').trim().escape(),
    body('sn').trim().isLength({ min: 1 }).escape().withMessage('S/N must be specified.')
        .isAlphanumeric().withMessage('Code has non-alphanumeric characters.'),
    body('manufacturer').trim().escape(),
    body('code').trim().isLength({ min: 1 }).escape().withMessage('LTI code must be specified.')
        .isAlphanumeric().withMessage('Code has non-alphanumeric characters.'),
    body('ref_code').trim().isLength({ min: 1 }).escape().withMessage('ELI code must be specified.'),
    /*body('id').trim().isLength({ min: 1 }).escape().withMessage('ID must be specified.')
        .optional({ checkFalsy: true })
        .isNumeric().withMessage('ID must be numeric.'),*/
    body('docsString').trim().escape(),
    
    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            //console.log("errors");
            res.render('add_component', { title: 'Error in adding a component', comp_data: req.body, errors: errors.array(), user: req.user });
            return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            // Users.findIne({ 'username': req.body.user })
            Equipment.findOne({ 'serial_number': req.body.sn })
              .exec( function(err, found_comp) {
                if (err) { return next(err); }

                if (found_comp) {
                  // Component exists, redirect to itself with its detail page.
                  //console.log("errors");
                  res.render('add_component', { title: 'Error in adding a component: s/n already exist', comp_data: req.body, errors: errors.array(), user: req.user });
                }
                else{
                  // Create an component object with escaped and trimmed data.
                  // Find user. If exists => insert, otherwise => error
                  var date = Date();
                  var split = req.body.docsString.split(", ");
                  //console.log('Docs: ' + req.body.rel_docs);
                  var component = new Equipment(
                    {
                      //id: req.body.id,
                      lti_code: req.body.code,
                      module: req.body.module,
                      location: req.body.location,
                      subsystem: req.body.subsystem,
                      eli_component_code: req.body.ref_code,
                      serial_number: req.body.sn,
                      manufacturer: req.body.manufacturer,
                      related_docs: split,
                      component_description: req.body.comp_description,
                      date: date,
                      user_id: req.body.user
                    });
                  component.save(function (err) {
                    if (err) { return next(err); }
                    // Successful - redirect to new author record.
                    //console.log("no errors");
                    res.render('add_component', { title: 'Add component to GBS equipment list', comp_data: req.body, errors: ["Successfully added a component"], user: req.user });
                  });
                }
              });         
        }
    },
];

// Display Equipment delete form on GET.
exports.equip_delete_get = function(req, res) {
    res.render(path.join(__dirname, '../views/error'), {title: 'GBS DB', message: 'You are not authorize to see this page!'});
    //res.send('NOT IMPLEMENTED: Component delete GET');
};

// Handle Equipment delete on POST.
exports.equip_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Equipment delete POST');
};

// Display Equipment update form on GET.
exports.equip_update_get = function(req, res) {
    res.render(path.join(__dirname, '../views/error'), {title: 'GBS DB', message: 'You are not authorize to see this page!'});
    //res.send('NOT IMPLEMENTED: Equipment update GET');
};

// Handle Equipment update on POST.
exports.equip_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Equipment update POST');
};

// Handles the pdf files serving
exports.docs = function(req, res) {
  var q = url.parse(req.url, true); 
  var filename = __dirname + q.pathname; 
  console.log('Download Docs: ' + filename);
  //filename = __dirname + ../q.pathname; // do something
  filename = path.join(__dirname, '../', q.pathname);
  filename = filename.replace(/%20/g, " ");
  console.log('FileName: ' + filename);
  fs.readFile(filename, function(err, data) { //read file "name".pdf in public/pdfs folder 
  if (err) { 
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error 
      console.error('error' + filename);
      return res.end("404 Not Found: " + __dirname + " and " + q.pathname);     
  }
  var file = fs.createReadStream(filename);
  var stat = fs.statSync(filename);
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; ');
  //res.send(file);
  file.pipe(res);
  /*res.download(filename, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }    
  });*/
    //res.render('index', { title: Title, device: userDevice  });
    //res.writeHead(200, {'Content-Type': 'application/pdf'}); //write HTML 
    //res.contentType("application/pdf");
    //res.send(data); //write data from index.html 
    console.log('Page sent: ' + filename); 
    //return res.end();
  });
    //res.send('NOT IMPLEMENTED: Equipment update POST');
};

exports.load_file = function(req, res, next) {
      console.log('received file ');
      res.render(path.join(__dirname, '../views/form_upload'), {title: 'success'});
};



