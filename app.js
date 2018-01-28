var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/cities", function(request, response) {
   var cities = ["Dublin", "Barcelona", "New York", "Tokyo"]; 
   response.json(cities);
});

app.listen(process.env.PORT, function() {
    console.log(process.env.IP);
    console.log(process.env.PORT);
});