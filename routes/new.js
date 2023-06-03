const express = require('express');
const router = express.Router();

/* GET new page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

module.exports = router;
