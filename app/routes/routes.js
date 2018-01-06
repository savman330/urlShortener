// routes.js

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('GET request received...roger, roger.');
});  
};