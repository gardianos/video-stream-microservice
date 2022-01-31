const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello Microservice app");
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
