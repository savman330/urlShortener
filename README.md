# Header Parser Microservice

_note: I sort of jumped around here a little bit; The microservice works and exactly follows the user stories set forth in 
[here](https://www.freecodecamp.org/challenges/request-header-parser-microservice)_

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

Ok so I decided to an architcture where each route is it's own module; they are located in ```./app/routes```.

ok so this was a good learning experience. 

A general template will be as follows:

```
controllers/
    index.js
    route1.js
    route2.js
    ...
    routeN.js
tests
server.js
package.json
```
Thus my server.js file will only need to import my controller (index.js); it will contrain some home page routes, about page
etc. but more importantly it will contain all the route1 through routeN.js modules.  


getting a little tired here..... I have a good architechture using express.Router().

It has been tested by pinging each enpoint at which I simply send a string to Postman.  

In an attempt to fill the user story outline in Request Header Parser Microservice line item 4.) I have done the following:

  * display users IP address - the IP address is a property of the req object; so, res.send(req.ip);
  * OS of browser - req.headers object.... req.headers['user-agent'];
  * language of user = req.headers['accept-language']
  * now I can use some time of find() method and match of regex of say 'en-us' or whatever and dsiplay english
  * thats for tomorrow
  * 
OK....for now that's not bad...I am emitting an obj at my endpoint with the details needed for the user story.
So now I need to construct a rudimentary page. So I have the C in MVC; not sure about the M and V.

## Final Thoughts

OK, so the microservice is working exactly as the user stories indicate in the exercise.  I return an object with the ip address, language
and os of the user; all neatly formatted.

It was a good exercise as I had to create a route, use some logic and parse the headers etc.  

There are several superfluos routes, /animals/ and /cars/, as I was gettig comforable with routes and express.Router()

The actual micrservice is at /headers/headers.  Cleverly named, I know.

So that's it.  I did a rudimentary index.html page that has nothing to do with the assignment. On to the next.