const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Hello World ${req.params.name}`);
});

app.get("/home/:name/:id", (req, res) => {
  res.send(`  ${req.params.name}  ${req.params.id}`);
});

app.get("/:name/profile", (req, res) => {
  res.send("Welcome to profile");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT => ${PORT}`);
});
