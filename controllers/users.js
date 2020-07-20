const data = require("../data.json")

exports.index = function(req, res){
    return res.render("users/index", {items: data.recipes})
}

exports.receita = function(req, res){
    return res.render("users/receitas", {items: data.recipes})
}

exports.about = function(req, res){
    return res.render("users/sobre")
}

exports.recipe = function(req, res){
    const index = req.params.index;

    const recipe = data.recipes.find(recipe => recipe.id == index);

    res.render("users/recipes", {items: recipe});
    
}