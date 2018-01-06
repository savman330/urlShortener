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
    // declare an object with the values I want populated:
    // ip; lang; os
    let obj = {
      'ip': req.ip,
      'language': req.headers['accept-language'],
      'os': req.headers['user-agent'] 
    };
    res.send(obj);
});

module.exports = router;