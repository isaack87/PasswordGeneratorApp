
const HashPassWord = require('../Models/apiModel.js');
const bcrypt = require('bcrypt');


// create a hasspassword with password req recieved and enter into db
const createHashPassword = (password) => {
  // set salt rounds
  const saltRounds = 8;
  const myPlaintextPassword = password;
  HashPassWord.findOne({'password': `${password}`}, function(err, doc) {
    // checks to see if password exist if null create
    if ( doc == null ) {
      bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
          if (err) {
            return ('error in createHashPassword function');
          }

          // if hash is successful will push into mongo Database & create entry
          if (hash) {
          // option to slice to increase or decrease password size (optional)
            hash = hash.slice(0, 15);
            HashPassWord.create({password: password, hashedpassword: hash},
                {new: true, upsert: true})
                .then((data) => {
                  return data;
                });
          }
        });
      });
    }
  });
};

module.exports.createHashPassword = createHashPassword;