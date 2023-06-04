const express = require('express');
const router = express.Router();
const format = require("date-fns/format")

const Message = require("../models/message");

//  Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

require('dotenv').config();

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;

const mongoDB = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.f2xfnx5.mongodb.net/?retryWrites=true&w=majority`


main().catch((err) => console.log(err));

async function main() {
  try {
    mongoose.connect(mongoDB);
    const messages = await Message.find();
    messagesArr = messages;
  } catch (e) {
    console.error(e);
  }
}


const formatDate = (date) => {
  return format(date, "h:mm b")
}

let messagesArr = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messagesArr, formatDate });
});

// POST data from new message
router.post("/new", async (req, res) => {
  const message = Message({
    text: req.body.text,
    user: req.body.user,
    added: formatDate(new Date())
  })
  await message.save();

  await main().catch((err) => console.log(err));

  res.redirect("/")
})


module.exports = router;
