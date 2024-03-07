const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://testing-node-jest:WkoeufNv9PmSylAm@cluster0.mh7m518.mongodb.net/testing';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
    socketTimeoutMS: 45000 
  };
  
  const db = mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = {
  mongoose,
  mongoURI,
  db
};