const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const data = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index", {items: data})
})

server.get("/receitas", function(req, res){
    return res.render("receitas", {items: data})
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/recipes/:index", function(req, res){
    const index = req.params.index;

    const recipe = data.find(recipe => recipe.id == index);

    res.render("recipes", {items: recipe});
    
})

server.listen(5000, function(){
    console.log("server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });