var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/search/:search', function(req, res, next) {
  var query = req.query.search;
  console.log(query);
});

module.exports = router;
