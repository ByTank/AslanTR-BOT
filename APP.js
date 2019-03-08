const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " OW Ping aldık beyler");
  response.sendStatus(200)
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  console.log("➸ ƓЄ ExtraPower"
