const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');

//connect to my mongoDB
mongoose.connect('mongodb://localhost/password', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connection Successful'))
.catch(err => console.log(err));

// create PassWord schema & model
const PassWordSchema = new Schema({
  password: String,
  hashedpassword: String
});

const HashPassWord = mongoose.model('passwords', PassWordSchema);
module.exports= HashPassWord




