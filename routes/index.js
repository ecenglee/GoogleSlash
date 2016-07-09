var express = require('express');
var router = express.Router();
var searchController = require('../controllers/search');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GoogleSlash' });
});

// API Routes
router.get('/api', searchController.query);

module.exports = router;
