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
    login: (req, res) =>{

       return res.render('../views/users/login')

      },
     
    processLogin: (req,res)=>{

        const errors = validationResult(req);
          
        if (errors.errors.length > 0){
          
          return res.render('users/login',{ errors: errors.mapped(), old: req.body}); // el metodo mapped pasa el array errors a un objeto literal
        }else{

          db.Usuario.findOne({where:{email:req.body.email}}) 
          .then(function(user){
             if(bcrypt.compareSync(req.body.password, user.password)){

               req.session.user= 
                {   // aca a session le creo una popiedad llamada como yo quiera y asignarle los datos q quiera inclusive el req.body
               name: user.first_name ,   // a este session lo voy a poder manejar dentro de este controller xq es donde tengo acceso al request
                id: user.id,             // para poder usarlo en las vistas tengo q mandarlo de alguna manera xq en las vistas no tengo acceso al request
                email: user.email ,      // la manera de hacerlo es creando un middleware 
               
                };
               
              // if(req.session.user){
                return res.render('users/profile', {user})
              }else{
                return res.render('users/login',{errors:{password:{msg:'Credenciales Invalidas'}}})
              }
               //}
          })
          
       
            
        }
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

          
          const errors = validationResult(req);
          
          if (errors.errors.length > 0){
            //return res.json(errors);
            return res.render("users/register",{ errors: errors.mapped(), old: req.body}); // el metodo mapped pasa el array errors a un objeto literal
          }


          db.Usuario.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 12),
          age:req.body.age,
          country:req.body.country,
          image: req.file.filename  || "default-image.png"
          });
         return res.redirect("login")
        
       },
        //usuarios.push(newUser);
        //fs.writeFileSync(userPath, JSON.stringify(usuarios,null,2));
        //return res.redirect("login")
        profile: (req,res) =>{
         
         // db.Usuario.findAll()
         // .then(function(usuario){
            return res.render('../views/users/profile')
        // })
       },

       edit: (req,res) => {
        db.Usuario.findOne({where:{id:req.params.id}})
           .then(function(user){
             return res.render("users/editUser", {user})
           })
        },

        update: (req,res) =>{

            const errors = validationResult(req);
          
          if (errors.errors.length > 0){
            
            return res.render("users/editUser",{ errors: errors.mapped(), old: req.body}); // el metodo mapped pasa el array errors a un objeto literal
          }




            db.Usuario.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                age:req.params.age,
                country:req.params.country,
                image: req.file.filename  || "default-image.png"
                },
                {
                where:{id:req.params.id}
                }
                );
               return res.redirect("/user/login")

        }
    }
    module.exports = userController