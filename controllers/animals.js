// animals.js

const   express = require("express"),
        router = express.Router();
        
router.get('/fourlegs', (req, res) => {
    console.log('being pinged at /animals/fourlegs');
    res.send(req.headers['accept-language']);
});

router.get('/twolegs', (req, res) => {
    console.log('being pinged at /animals/twolegs');
    //res.send('ostritich, human, cardinal');
    res.send(`you are located at ${req.ip} address`);
});

module.exports = router;