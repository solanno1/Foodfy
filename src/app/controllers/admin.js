const { date } = require('../../lib/utils')
const Admin = require('../models/Admin')

module.exports = {
    edit(req, res) {
        User.find(req.params.id, function (recipe) {
            if (!recipe) return res.send("Recipe not found")
            return res.render("users/receitas", { receitas })
        })
    },
    create(req, res){
        return res.render("admin/recipes/create")
    },    
}










// const fs = require('fs')
// const data = require("../../../data.json")

// exports.index = function(req, res){
//     return res.render("admin/recipes", {items: data.recipes})
// }

// exports.create = function(req, res){
//     return res.render("admin/recipes/create")
// }

// exports.post = function(req, res){
//     const keys = Object.keys(req.body)
//     for(key of keys){
//         if(req.body[key] == ""){
//             return res.send("Preencha todos os campos")
//         }
//     }

//     let id = 1
//     const lastRecipe = data.recipes[data.recipes.length - 1]
//     if(lastRecipe){
//         id = lastRecipe.id + 1
//     }

//     data.recipes.push({
//         id,
//         ...req.body
//     })

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
//         if(err) return res.send("Write File Error")

//     return res.redirect("/receitas")
//     })

// }

// exports.show = function(req, res){
//     const {id} = req.params
//     const foundRecipe = data.recipes.find(function(recipe){
//         return recipe.id == id
//     })

//     if(!foundRecipe) return res.send("Recipe not found")            

//     const recipe = {
//         ...foundRecipe
//     }

//     return res.render("admin/recipes/show", {items: recipe})

// }

// exports.edit = function(req, res){
//     const {id} = req.params
//     const foundRecipe = data.recipes.find(function(recipe){
//         return recipe.id == id
//     })

//     if(!foundRecipe) return res.send("Recipe not found")            

//     const recipe = {        
//         ...foundRecipe,
//     }
//     return res.render("admin/recipes/edit", {items: recipe})
// }

// exports.put = function(req, res){
//     const {id} = req.body
//     let index = 0
//     const foundRecipe = data.recipes.find(function(recipe, foundIndex){
//         if(id == recipe.id){
//             index = foundIndex
//             return true
//         }
//     })

//     if(!foundRecipe) return res.render("Recipe not found")

//     const recipe = {
//         ...foundRecipe,
//         ...req.body,
//         id: Number(req.body.id)
//     }

//     data.recipes[index] = recipe

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
//         if(err) return res.send("File write error")

//         return res.redirect(`/admin/recipes/${id}`)
//     })
// }

// exports.delete = function(req, res){
//     const {id} = req.body
//     const filteredItems = data.recipes.filter(function(recipe){
//         return recipe.id != id
//     })

//     data.recipes = filteredItems

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
//         if(err) res.render("File write error!")
//         return res.redirect("/admin/recipes")
//     })
// }