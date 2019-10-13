// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 5000;
const citiesRouter = require ("./routes/citiesRouter")

const bodyParser = require("body-parser");
const cors = require("cors");

app.use("/cities",citiesRouter);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors()); 

// ROUTES 
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});

// we'll create our routes here
// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
