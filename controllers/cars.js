// cars.js

const   express = require("express"),
        router = express.Router();
        
router.get('/brands', (req, res) => {
    console.log('being pinged at /CARS/BRANDS');
    res.send('acura, audi, bmw, tesla');
});

router.get('/types', (req, res) => {
    console.log('being pinged at /CARS/TYPES');
    res.send('sedan, truck, suv');
});

module.exports = router;