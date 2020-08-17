const { db } = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT recipes.image, recipes.title, chefs.name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        GROUP BY recipes.id, chefs.id
        ORDER BY ID ASC`, function (err, results) {
            if (err) throw `Database Error ${err}`
            callback(results.rows)
        })
    },    
    find(id, callback) {
        db.query(`SELECT * FROM recipes WHERE id = $1`, [id], function (err, results) {
            if (err) throw `Database Error ${err}`
            callback(results.rows[0])
        })
    },
    findBy(filter, callback) {
        db.query(`SELECT recipes.image, recipes.title, chefs.name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        WHERE recipes.title ILIKE '%${filter}%'
        OR chefs.name ILIKE '%${filter}%'
        GROUP BY recipes.id, chefs.id
        ORDER BY ID ASC`, function (err, results) {
            if (err) throw `Database Error ${err}`
            callback(results.rows)
        })
    },
   
    paginate(params){
        const {filter, limit, offset, callback} = params
        let query = "",
        filterQuery = "",
        totalQuery = `(
            SELECT count(*) FROM recipes
        ) AS total`

        if(filter){
            filterQuery = `
            WHERE recipes.title ILIKE '%${filter}%'
            OR chefs.name ILIKE '%${filter}%'
            `
            totalQuery = `(
                SELECT count(*) FROM recipes
                ${filterQuery}
            ) AS total`
        }

        query = `SELECT recipes.*, ${totalQuery}, chefs.name FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ${filterQuery}
        GROUP BY recipes.id, chefs.id
        LIMIT $1 OFFSET $2`

        db.query(query, [limit, offset], function(err, results){
            if (err) throw `Database Error ${err}`
            callback(results.rows)
        })
    }
}