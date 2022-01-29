const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./user.route');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/user', userRouter);

// Replace uri with connection string from mongodb atlas
const uri = "connection string";


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});