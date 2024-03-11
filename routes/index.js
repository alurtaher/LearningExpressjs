var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req, res) => {
  const { username } = req.body;
  res.cookie('username', username); // Storing username in cookie
  res.redirect('/');
});

// Route for handling message sending and storing in a file
router.post('/send-message', (req, res) => {
  const { message } = req.body;
  const username = req.cookies.username; // Retrieving username from cookie
  if (!username) {
      res.status(400).send('Username not found');
      return;
  }

  const data = `${username}: ${message}\n`;

  fs.appendFile('messages.txt', data, (err) => {
      if (err) {
          console.error('Error appending message:', err);
          res.status(500).send('Error sending message');
          return;
      }
      res.redirect('/');
  });
});

// Route for retrieving and displaying messages
router.get('/messages', (req, res) => {
  fs.readFile('messages.txt', 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading messages:', err);
          res.status(500).send('Error retrieving messages');
          return;
      }
      const messages = data.split('\n');
      res.json(messages);
  });
});

module.exports = router;
