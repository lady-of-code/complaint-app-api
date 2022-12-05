const express = require('express');
const router = express.Router();
const complaints = require('../services/complaints');

/* GET quotes listing. */
router.get('/complaints', complaints.GetList);

router.post('/', function(req, res, next) {
    try {
      res.json(complaints.AddComplaint(req.body)).status(200);
    } 
    catch(err) {
      console.error(`Error while getting quotes `, err.message);
      next(err);
    }
  });
  

module.exports = router;
