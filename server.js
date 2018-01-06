// server.js

const   express = require("express"),
        routes = require("./app/routes/routes.js");
        
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT

app.use('/', routes);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
