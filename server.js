// Require Dependencies

const { response } = require("express");
const express = require("express");
const app = express();// Initialize the Express Application 
const pokemon = require("./models/pokemon.js");

// INDUCES || Routes
//INDEX
app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/pokemon", (req, res) => {
    res.render("index.ejs", { allPokemon: pokemon });
}); 

//NEW- form create a new pokemon
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

//DELETE
app.delete("/pokemon/:id", (req, res) => {
    res.send("hello world2!")
})

//UPDATE
app.put("/pokemon/:id", (req, res) => {
    res.send("hello world3!")
})

//CREATE- route when u want to add
app.post("/pokemon", (req, res) => {
    // res.render("new.ejs");
});
//EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.send("hello world5!")
})

//SHOW
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", { allPokemon: pokemon[req.params.id] });
});

// Open a connection on host machine to listen for requests
app.listen(3000)