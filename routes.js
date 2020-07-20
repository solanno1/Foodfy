const express = require('express')
const routes = express.Router()
const users = require("./controllers/users")
const recipes = require("./controllers/admin")


routes.get("/", users.index)
routes.get("/receitas", users.receita)
routes.get("/sobre", users.about)
routes.get("/recipes/:index", users.recipe)

routes.get("/admin/recipes/create", recipes.create)
routes.post("/admin/recipes", recipes.post)

module.exports = routes