const express = require('express');
const app = express();
const db = require('./db');
const sampleRouter = require('./routes/sample-router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/sample", sampleRouter); // Add a forward slash before "sample"

const PORT = process.env.PORT || 1212;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;
