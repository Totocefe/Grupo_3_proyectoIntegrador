const fs = require("fs");
const path = require("path");
// esta es la ruta a la base de datos de productos guardada en una variable utilizando el metodo join de path
const propath = path.join(__dirname, "../db/productos.json");
// esta es la ruta a la base de datos de usuarios guardada en una variable utilizando el metodo join de path
const userPath = path.join(__dirname, "../db/users.json");
// aca requiero a la funcion validation result para poder hacer efectivas las validaciones del router
const {validationResult} = require("express-validator");

//aca requiero bcrypt para poder usar su metodo .hashsync y poder encriptar la contraseña
const bcrypt = require("bcryptjs");
// esta es la funcion en la cual obtengo un archivo json parseado
const read = ( path ) => {
    const datos = fs.readFileSync(path, "utf-8");
    const datosparsed = JSON.parse(datos);
    return datosparsed;
}

const controllers = {

  // esto lleva al home junto con la lista de productos
    home: (req, res) => {
        const productos = read(propath);
        return res.render("home",{productos:productos});
       
    },

    // esto lleva al login del usuario
    login: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/login'))

    },

   // processLogin:(req,res)=>{
     // const errors = validationResult(req);
      //if(!errors.isEmpty()){
        //return res.render("home",{errors:errors.mapped(), old: req.body});
      //}else {
        //return res.render("home", { user: req.body});
      //}

    //},

    //esto lleva al carrito de compras
    productCart: (req, res) =>{res.render(path.resolve(__dirname,'../views/products/productCart'))

    },

    // esto lleva a la pagina del detalle del producto segun el id que llega por parametro en la url
    productDetail: (req, res) =>{
            const id = req.params.id;
            const productos = read(propath);
            const producto = productos.find(product => product.id == id);
		       return res.render("../views/products/productDetail", { producto })
    },

    // esto lleva a la pagina de registracion del usuario
    
    register: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/register'))

    },

    //esto  almacena en la base de datos al usuario registrado

    userStore: (req,res) =>{
      
      const usuarios = read(userPath)
      const newUser={
        id:usuarios[usuarios.length-1].id+1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12),
        image: req.file?.filename  || "default-image.png"
        
      }
      usuarios.push(newUser);
      fs.writeFileSync(userPath, JSON.stringify(usuarios,null,2));
      return res.redirect("login")

    },

    //esto lleva al formulario de creacion de un producto

    create: (req,res)=>{res.render(path.resolve(__dirname,'../views/admin/crearProd'))

    },

    // esto almacena el producto creado segun lo ingresado en el body del formulario

    store:(req,res)=>{
      const productos = read(propath)
		const producto={
			id:productos[productos.length-1].id+1,
			name: req.body.name,
			price: req.body.price,
      country: req.body.country,
			discount: req.body.discount,
			category: req.body.category,
			description:req.body.description,
			image: req.file?.filename  || "default-image.png",
      condition: req.body.condition,
		}
		productos.push(producto);
		fs.writeFileSync(propath, JSON.stringify(productos,null,2));
		return res.redirect("/")
  },

  // esto edita un producto de acuerdo al id q llega como parametro en la url
    edit: (req,res)=>{
        const id = req.params.id;
        const productos = read(propath)
        let producto;
        productos.forEach(element => {
          if (element.id == id){
            producto = element;
          }  
        });
        
        res.render('../views/admin/editarProd', { producto : producto })

        
   },

    // esto guarda los cambios de la edicion del producto pisando en el archivo json los cambios generados en el body del formulario
    update: (req,res)=>{
      
        const id = req.params.id;
        const productos = read(propath);
     
       productos.forEach(producto => {
          if (producto.id == id){
           
            producto.name = req.body.name;
            producto.description = req.body.description;
            producto.category = req.body.category;
            producto.price = req.body.price;
            producto.country = req.body.country;
           producto.discount = req.body.discount;
           producto.condition = req.body.condition;
           
           
        }  
       }); 
      
       fs.writeFileSync(propath, JSON.stringify(productos , null,2)); 
        return res.redirect('/');
      

    },
   
    // esto elimina un producto de la base de datos, la logica es sobre-escribir la base de datos sin el producto q tenga por id el mismo id q llega por url
  destroy: (req, res) =>{
    const productos = read(propath);
    const productosFiltrados = productos.filter(producto => producto.id != req.params.id);
    fs.writeFileSync(propath, JSON.stringify(productosFiltrados,null,2));
     return res.redirect("/");
    
}
}

module.exports = controllers;