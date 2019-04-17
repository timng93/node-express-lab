const express = require("express");

const app = express();

const port = 3000;

//instruct server start listening
app.listen(port, function() {
  console.log("Express app listening on port " + port);
});

app.get(`/`, function(request, response) {
  response.send("Hello World");
});
