const fs = require("fs");
const path = require("path");
// esta es la ruta a la base de datos de productos guardada en una variable utilizando el metodo join de path
const propath = path.join(__dirname, "../db/productos.json");
// esta es la ruta a la base de datos de usuarios guardada en una variable utilizando el metodo join de path
const userPath = path.join(__dirname, "../db/users.json");
// aca requiero a la funcion validation result para poder hacer efectivas las validaciones del router
const {validationResult} = require("express-validator");
// aca guardo en una variable el acceso a los modelos
const db = require('../../../database/models');
//accedo a sequelize
const sequelize = db.sequelize;
// aca guardo en una variable el acceso a los operadores de sequelize
const { Op } = require("sequelize");
//aca requiero bcrypt para poder usar su metodo .hashsync y poder encriptar la contraseña
const bcrypt = require("bcryptjs");
const { name } = require("ejs");
// esta es la funcion en la cual obtengo un archivo json parseado
const read = ( path ) => {
    const datos = fs.readFileSync(path, "utf-8");
    const datosparsed = JSON.parse(datos);
    return datosparsed;
}

const apiUserController = {

  // esto lleva al home junto con la lista de productos
    list: (req, res) => {
        db.Producto.findAll({attributes:['id','name','description']})

        .then(function(productos){
            
        return res.status(200).json({
            meta:{code:res.statusCode},
            count:productos.length,
            countByCategory:{
                almacen:0,
                alcohol:0
            },
            products:[productos],            
            detail:'http://localhost:3001/api/product/:id'
                  
        });
        });
    },
    detail: (req,res) =>{
        db.Producto.findByPk(req.params.id)
           .then(function(producto){
             return res.status(200).json({
                meta:{code:res.statusCode},
                id: producto.id,
                name: producto.name,
                description: producto.description,
                price: producto.price,
                country: producto.country,
                categorie: producto.categorie,
                discount: producto.discount,
                condition: producto.condition,
                image: req.protocol + '://' + req.get("host") + '/images/products/' + producto.image
           })
           })
    }
    
}

module.exports = apiUserController;