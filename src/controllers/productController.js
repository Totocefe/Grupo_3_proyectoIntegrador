const fs = require("fs");
const path = require("path");
// esta es la ruta a la base de datos de productos guardada en una variable utilizando el metodo join de path
const propath = path.join(__dirname, "../db/productos.json");
// esta es la ruta a la base de datos de usuarios guardada en una variable utilizando el metodo join de path
const userPath = path.join(__dirname, "../db/users.json");
// aca requiero a la funcion validation result para poder hacer efectivas las validaciones del router
const {validationResult} = require("express-validator");
// aca guardo en una variable el acceso a los modelos
const db = require('../../database/models');
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
    return datosparsed;}
    



    const productController = {
        // esto lleva a la pagina del detalle del producto segun el id que llega por parametro en la url
    productDetail: (req, res) =>{
        //const id = req.params.id;
         //const productos = read(propath);
         //const producto = productos.find(product => product.id == id);
            //return res.render("../views/products/productDetail", { producto })
        db.Producto.findByPk(req.params.id)
           .then(function(producto){
             return res.render("../views/products/productDetail", { producto })
           })
 },
    
   

    
    
       //esto lleva al carrito de compras
    productCart: (req, res) =>{res.render(path.resolve(__dirname,'../views/products/productCart'))

},

search:(req,res)=>{
    db.Producto.findOne({
      where:{name:{[Op.like]:'%'+ req.body.buscador + '%'}} // "buscador" es el name del input del form del search
    }) 
    .then(function(producto){
        
       
      return res.render("../views/products/productDetail",{ producto })
})
}
    }
    module.exports = productController;