// routes.js

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET request received...roger, roger.');
    });  

module.exports = router;