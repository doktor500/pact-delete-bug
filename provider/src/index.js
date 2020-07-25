const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.post("/users/:id", (request, response) => {
    console.log("Deleting user...")
    response.send();
});

app.delete("/users/:id", (request, response) => {
    console.log("Deleting user...")
    response.send();
});

app.listen(port);

module.exports = app;
