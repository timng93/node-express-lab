const express = require("express");

const app = express();

const port = 3000;

const bodyParser = require("body-parser");

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

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
  console.log("Express app listening on port " + port);
});

app.post("/quotes", function(req, res) {
  console.log("Insert new quote" + req.body.quote);
  res.json(req.body);
});
