const express = require('express');
const app = express();
const sampleRouter = require('./router/sample-router');
const sampleRouter1 = require('./router/sample1_router.js');

const db = require('./db.js');


app.use('/sample', sampleRouter);

app.use('/sample1',sampleRouter1)

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
