const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {
        toiletArray: data.toiletten
   }); 
});

app.listen(port);  