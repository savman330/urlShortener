// headers.js

const   express = require("express"),
        router = express.Router(),
        parser = require("../logic/parser");
        
router.get('/headers', (req, res) => {
    let obj = {
      'ip': req.ip,
      'language': req.headers['accept-language'],
      'os': req.headers['user-agent']
    };
    console.log(JSON.stringify(req.headers, null, 2))
    res.send(parser(obj));
});

module.exports = router;
