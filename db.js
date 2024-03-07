const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://testing-node-jest:WkoeufNv9PmSylAm@cluster0.a8fr4qa.mongodb.net/testing'; // Assuming MongoDB is running locally
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(mongoURI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
