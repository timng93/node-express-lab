const express = require("express");

const app = express();

const port = 3000;

const quotes = [
  {
    id: 1,
    quote: "The best is yet to come",
    author: "Unknown",
    year: 2000
  },
  {
    id: 2,
    quote: "This is a quote",
    author: "First last",
    year: 1930
  },
  {
    id: 3,
    quote: "This is another quote",
    author: "First2 Last2",
    year: 1910
  }
];

app.listen(port, function() {
  console.log("Express app listening on port " + port);
});

app.get("/", function(request, response) {
  console.log("Get list of all quotes");
  response.json(quotes);
});
