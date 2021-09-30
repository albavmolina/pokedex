// Require Dependencies

const express = require("express");
const app = express();// Initialize the Express Application 
const pokemon = require("./models/pokemon.js");

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(3000)