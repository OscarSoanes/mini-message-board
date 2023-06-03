const express = require('express');
const router = express.Router();

/* GET new page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Create a Message' });
});

module.exports = router;
