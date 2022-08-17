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

    const adminController ={
          //esto lleva al formulario de creacion de un producto

    create: (req,res)=>{res.render(path.resolve(__dirname,'../views/admin/crearProd'))

    },
    // esto almacena el producto creado segun lo ingresado en el body del formulario

    store:(req,res)=>{
        db.Producto.create({
          name: req.body.name,
              price: req.body.price,
        country_id: req.body.country,
              discount: req.body.discount,
              categorie: req.body.categorie,
              description:req.body.description,
              //image: req.file.filename  || "default-image.png",
        condicion: req.body.condicion
        });
           return res.redirect("/")
        },


    // esto edita un producto de acuerdo al id q llega como parametro en la url
    edit: (req,res)=>{
        //const id = req.params.id;
        //const productos = read(propath)
        //let producto;
        //productos.forEach(element => {
          //if (element.id == id){
           // producto = element;
           db.Producto.findByPk(req.params.id)
           .then(function(producto){
             return res.render("../views/admin/editarProd", { producto })
           })
          },  
         //res.render('../views/admin/editarProd', { producto : producto })


          // esto guarda los cambios de la edicion del producto pisando en el archivo json los cambios generados en el body del formulario
    update: (req,res)=>{
      
        // const id = req.params.id;
        //const productos = read(propath);
      
        //productos.forEach(producto => {
          // if (producto.id == id){
            
             //producto.name = req.body.name;
           // producto.description = req.body.description;
           //  producto.category = req.body.category;
           //  producto.price = req.body.price;
           //  producto.country = req.body.country;
           // producto.discount = req.body.discount;
           // producto.condition = req.body.condition;
            db.Producto.update({
             name: req.body.name,
             price: req.body.price,
       country_id: req.body.country,
             discount: req.body.discount,
             categorie: req.body.categorie,
             description:req.body.description,
             image: req.file.filename  || "default-image.png",
       condicion: req.body.condicion
            },
            {
             where:{id:req.params.id}
            })
            .then(function(){
            return res.redirect('/');
           })
         } , 
       // }); 
       
        //fs.writeFileSync(propath, JSON.stringify(productos , null,2)); 
          // },

          
    // esto elimina un producto de la base de datos, la logica es sobre-escribir la base de datos sin el producto q tenga por id el mismo id q llega por url
  destroy: (req, res) =>{
    //const productos = read(propath);
    //const productosFiltrados = productos.filter(producto => producto.id != req.params.id);
    //fs.writeFileSync(propath, JSON.stringify(productosFiltrados,null,2));
     //return res.redirect("/");
     db.Producto.destroy({
      where:{id:req.params.id}
     })
    
     return res.redirect("/");
    
    
}

    };
    module.exports = adminController;