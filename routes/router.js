const express = require('express');
const router = express.Router();
const complaints = require('../services/complaints');
// var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET quotes listing. */
router.get('/complaints', complaints.GetList);

// router.post('/complaints',urlencodedParser, complaints.AddComplaint);
router.post('/complaints', complaints.AddComplaint);

  
module.exports = router;
