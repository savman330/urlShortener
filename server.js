// server.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('GET request received...roger, roger.');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
