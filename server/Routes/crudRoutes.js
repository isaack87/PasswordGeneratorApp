const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const HashPassWord = require('../Models/mongoModels.js');
const {createHashPassword} = require('../Helpers/helperFunctions.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// CREATE FUNCTION
router.post('/create', (req, res) => {
  const password = req.query.password;
  createHashPassword(password, (err) => {
    if (err) {
      return ('post error');
    }
  });
  res.send('success in post');
});

// READ FUNCTION
router.get('/retrieve', (req, res) => {
  const password = req.query.password;
  process.on('uncaughtException', function(ex) {
    res.end('password doesnt exist');
  });
  HashPassWord.find({'password': password})
      .then((pw) => {
        res.send(pw[0].hashedpassword);
      });
});


module.exports = router;


