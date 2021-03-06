require("dotenv").config();

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const wordsCtrl = require("./controllers/words");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

//catch all route for client side routing
app.get("/api/secretword/:difficulty", wordsCtrl.getSecretWord);
app.get("/api/definition/:word", wordsCtrl.getWordDefinition);
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
