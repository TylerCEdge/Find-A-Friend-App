var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json({ type: "application/*+json"}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text({ type: "text/html" }));

app.use(bodyParser.json({ type: "application/vnd.custom-type" }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});



// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser')

// var PORT = process.env.PORT || 8080;

// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false})

// app.use(bodyParser.json({ type: 'application/*+json' }))

// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// app.use(bodyParser.text({ type: 'text/html' }))

// require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);


// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });
