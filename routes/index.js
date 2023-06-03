const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// POST data from new message
router.post("/new", (req, res) => {
  console.log(req.body);
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })
  
  res.redirect("/")
})


module.exports = router;
