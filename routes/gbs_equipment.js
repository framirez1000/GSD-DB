var express = require('express');
var router = express.Router();

// Require controller modules.
var equip_controller = require('../controllers/equipController');
var users_controller = require('../controllers/usersController');
const { authJwt  } = require("../middlewares");
const controller = require("../controllers/user.controller");
var fs = require('fs'); //require filesystem module 
var util = require('util');
var multer  = require('multer');
var storage = multer.diskStorage(
    {
        destination: './public/pdfs',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname.split(" ").join(""));
        }
    }
);
/*var upload = multer({ dest: '../public',
                      filename: function ( req, file, cb ) {
                         cb( null, file.originalname );
                   } });*/
var upload = multer( { storage: storage } );
var path = require('path');


// Equipment routes //

// GET equipment home page.
router.get('/', equip_controller.index);
router.get('/home', [authJwt.verifyToken], equip_controller.home);

// POST request for creating component.
router.post('/add_component', [authJwt.verifyToken, authJwt.isUser], equip_controller.equip_create_post);

// GET request for creating a component. NOTE This must come before routes that display component (uses id).
router.get('/add_component', [authJwt.verifyToken, authJwt.isUser], equip_controller.equip_add_get);

// GET request to delete component.
router.get('/delete_comp', equip_controller.equip_delete_get);

// POST request to delete component.
//router.post('/delete_comp', equip_controller.equip_delete_post);

// GET request to update component.
router.get('/modify_comp', equip_controller.equip_update_get);

// POST request to update component.
//router.post('/update_comp', equip_controller.equip_update_post);

// GET request for one component.
//router.get('/:id', equip_controller.equip_detail);

// GET request for list of all items in the components list.
router.get('/component_list', [authJwt.verifyToken], equip_controller.equip_list);

// GET request for documents of a component.
router.get('/public/pdfs/*.pdf', equip_controller.docs);

// POST request to upload file
router.post('/postpdf', [authJwt.verifyToken], upload.single('inputfile'), equip_controller.load_file);

/*router.post('/postpdf', upload.single('inputfile'), function(req, res, next){
  console.log('received file' + req.file);
  console.log(util.inspect(req.file));
  fs.readFile(req.file.path, function (err, data) {
  // ...
    //var newPath = __dirname + "/pdfs/" + req.file.originalname;
    //var newPath = '/home/pc-01/Node/db-test/public/pdfs/' + req.file.originalname;
    var newPath = path.join(__dirname, '../public/pdfs/') + req.file.originalname;
    fs.writeFile(newPath, data, function (err) {
      console.log('received file ' + newPath);
      res.render(path.join(__dirname, '../views/form_upload'), {title: 'success'});
    });
  });
});*/


module.exports = router;
