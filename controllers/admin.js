const fs = require('fs')
const data = require("../data.json")

exports.index = function(req, res){
    return res.render("admin/recipes", {items: data.recipes})
}

exports.create = function(req, res){
    return res.render("admin/recipes/create")
}

exports.post = function(req, res){
    const keys = Object.keys(req.body)
    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Preencha todos os campos")
        }
    }

    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]
    if(lastRecipe){
        id = lastRecipe.id + 1
    }

    data.recipes.push({
        id,
        ...req.body
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write File Error")

    return res.redirect("/receitas")
    })

}

exports.show = function(req, res){
    const {id} = req.params
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send("Recipe not found")            

    const recipe = {
        ...foundRecipe
    }

    return res.render("admin/recipes/show", {items: recipe})

}

exports.edit = function(req, res){
    const {id} = req.params
    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if(!foundRecipe) return res.send("Recipe not found")            

    const recipe = {        
        ...foundRecipe,
    }
    return res.render("admin/recipes/edit", {items: recipe})
}