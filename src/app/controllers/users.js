const { date } = require('../../lib/utils')
const User = require('../models/User')

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query
        page = page || 1
        limit = limit || 3
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(recipes) {
                const pagination = {
                    total: Math.ceil(recipes[0].total / limit),
                    page
                }
                return res.render("users.index", { recipes, pagination, filter })
            }
        }
        User.paginate(params)
    },
    show(req, res){
        User.all(function(){
            return res.render("users/receitas", {recipe})
        })
    },
    about(req, res){
         return res.render("users/sobre")
    },
    find(req, res){
        User.find(req.params.id, function(recipe){
            return res.render("users/recipes", {recipe})
        })
    }
}
















// const data = require("../../../data.json")

// exports.index = function(req, res){
//     return res.render("users/index", {items: data.recipes})
// }

// exports.receita = function(req, res){
//     return res.render("users/receitas", {items: data.recipes})
// }

// exports.about = function(req, res){
//     return res.render("users/sobre")
// }

// exports.recipe = function(req, res){
//     const index = req.params.index;

//     const recipe = data.recipes.find(recipe => recipe.id == index);

//     res.render("users/recipes", {items: recipe});

// }