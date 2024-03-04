const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://manavp080:manavisgood@cluster0.9ivoywi.mongodb.net/`, ()=> {
  console.log('connected to mongodb')
})
