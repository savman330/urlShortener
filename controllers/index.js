// index.js

const   express = require("express"),
        router = express.Router(),
        cars = require("./cars"),
        animals = require("./animals");
        
router.get('/', (req, res) => {
    console.log('being pinged at HOME');
    res.send('youve reached HOME thx for calling');
});

router.get('/about', (req, res) => {
    console.log('being pinged at /ABOUT');
    res.send('things about us');
});

router.use('/cars', cars);
router.use('/animals', animals);




module.exports = router;