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

    const userController = {
        // esto lleva al login del usuario
    login: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/login'))

    },
    // esto lleva a la pagina de registracion del usuario
    
    register: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/register'))

    },

     //esto  almacena en la base de datos al usuario registrado

     userStore: (req,res) =>{
      
        //const usuarios = read(userPath)
        //const newUser={
          //id:usuarios[usuarios.length-1].id+1,
          //firstName: req.body.firstName,
          //lastName: req.body.lastName,
          //email: req.body.email,
          //password: bcrypt.hashSync(req.body.password, 12),
          //image: req.file.filename  || "default-image.png"
          const validaciones = validationResult(req);
          
          if (validaciones.length > 0){
            return res.render("register",{ validaciones: validaciones.mapped(), old: req.body}); // el metodo mapped pasa el array validaciones a un objeto literal
          }


          db.Usuario.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 12),
          age:req.params.age,
          country_id:req.params.country_id
  
          //image: req.file.filename  || "default-image.png"
          });
         return res.redirect("login")
        
       },
        //usuarios.push(newUser);
        //fs.writeFileSync(userPath, JSON.stringify(usuarios,null,2));
        //return res.redirect("login")
  
        }

    module.exports = userController