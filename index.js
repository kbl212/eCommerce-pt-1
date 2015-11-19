//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


//Controllers
var ProductCtrl = require('./controllers/ProductCtrl');




//Express
var app = express();


//Express Middleware
app.use(bodyParser.json());
app.use(cors());




//Endpoints
app.post('/api/product', ProductCtrl.create);

app.get('/api/product', ProductCtrl.read);
    
app.put('/api/product', ProductCtrl.update);

app.delete('/api/product', ProductCtrl.delete);



//Connections
app.listen(3000, function() {
    
    console.log('listening on port 3000');
});

var mongoUri = "mongodb://localhost:27017/e-commerce";
mongoose.connect(mongoUri, function(err) {
    if (err) throw err;
});
mongoose.connection.once('open', function() {
    console.log('connected to mongoDB at: ', mongoUri);
});