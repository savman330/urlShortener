// index.js

const   express = require("express"),
        path = require("path"),
        router = express.Router(),
        cars = require("./cars"),
        animals = require("./animals"),
        headers = require("./headers");
        
router.get('/', (req, res) => {
    console.log('being pinged at HOME');
    //console.log(path.join(__dirname, '../index.html'));
    res.sendFile(path.join(__dirname, '../index.html'));
    
});

router.get('/about', (req, res) => {
    console.log('being pinged at /ABOUT');
    res.send('things about us');
});

router.use('/cars', cars);
router.use('/animals', animals);
router.use('/headers', headers);




module.exports = router;