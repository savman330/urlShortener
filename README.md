# URL shortener

First began by init a new node project. 

Added the express framework and body-parser module as dependencies.

Added nodemon as a dev dependency.

Then I added a script 'dev' to the package.json file so nodemon would run server.js on file updates.

```javascript
// server.js

// dependancies
const express = require('express');
const bodyParser = require('body-parser');

// declare variable port and assign process.env.PORT to it for Cloud9
const port = process.env.PORT

// test route which I will ping with Postman
app.get('/', (req, res) => {
    res.send('received a GET request');
});

// listen for requests 
app.listen(port, () => {
    console.log('listeing on port ${port}');
    
});
```