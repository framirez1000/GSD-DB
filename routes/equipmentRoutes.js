var express = require('express');
var router = express.Router();
var fs = require('fs'); //require filesystem module 
var util = require('util');
var multer  = require('multer');
// Middlewares
const { authJwt  } = require("../middlewares");
// Require controller modules.
var equip_controller = require('../controllers/equipController');

var storage = multer.diskStorage(
    {
        destination: './public/pdfs',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname.split(" ").join(""));
        }
    }
);

var upload = multer( { storage: storage } );
var path = require('path');

// GET equipment home page.
router.get('/', equip_controller.index);
router.get('/home', [authJwt.verifyToken], equip_controller.home);

// GET request for list of all items in the components list.
router.get('/component_list', [authJwt.verifyToken], equip_controller.equip_list);

// GET request for creating a component. NOTE This must come before routes that display component (uses id).
router.get('/add_component', [authJwt.verifyToken, authJwt.isUser], equip_controller.equip_add_get);

// POST request for creating component.
router.post('/add_component', [authJwt.validateCompData, authJwt.verifyToken, authJwt.isUser], equip_controller.equip_create_post);

// POST request to upload file
router.post('/postpdf', [authJwt.verifyToken], upload.single('inputfile'), equip_controller.load_file);

// GET request to delete component.
router.get('/delete_comp', equip_controller.equip_delete_get);

// POST request to delete component.
//router.post('/delete_comp', equip_controller.equip_delete_post);

// GET request to update component.
router.get('/modify_comp', equip_controller.equip_update_get);

// GET request for documents of a component.
router.get('/public/pdfs/*.pdf', equip_controller.docs);

module.exports = router;