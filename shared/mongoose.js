

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const uri = "mongodb+srv://dharika29:Dharika2920@cluster0.pkez5lo.mongodb.net/";

const connect = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connect;

