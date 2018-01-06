// server.js

const   express = require("express"),
        controllers = require("./controllers");
        
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT;

app.use(controllers);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
    //console.log('dirname:', __dirname);
});
