const express = require('express')
const routes = express.Router()
const users = require("./controllers/users")
const recipes = require("./controllers/admin")


routes.get("/", users.index)
routes.get("/receitas", users.receita)
routes.get("/sobre", users.about)
routes.get("/recipes/:index", users.recipe)

routes.get("/admin/recipes/create", recipes.create)
routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/:id", recipes.show)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

module.exports = routes