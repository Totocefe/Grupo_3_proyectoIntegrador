const fs = require("fs");
const path = require("path");

const propath = path.join(__dirname, "../db/productos.json");

const read = ( path ) => {
    const datos = fs.readFileSync(path, "utf-8");
    const datosparsed = JSON.parse(datos);
    return datosparsed;
}

const controllers = {
    home: (req, res) => {
        const productos = read(propath);
        return res.render("home",{productos:productos});
       
    },
    login: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/login'))

    },
    productCart: (req, res) =>{res.render(path.resolve(__dirname,'../views/products/productCart'))

    },
    productDetail: (req, res) =>{res.render(path.resolve(__dirname,'../views/products/productDetail'))

    },
    register: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/register'))

    },
    create: (req,res)=>{res.render(path.resolve(__dirname,'../views/admin/crearProd'))

    },

    store:()=>{
  },
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
    update: (req,res)=>{
        const id = req.params.id;
        const productos = read(propath)
        let producto;
       productos.forEach(producto => {
          if (producto.id == id){
           
            producto.name = req.body.name;
            producto.description = req.body.description;
            producto.category = req.body.category;
            producto.price = req.body.price;
            producto.origin = req.body.origin;
           producto.discount = req.body.discount;
           producto.image = req.body.image;
           fs.writeFileSync(propath, JSON.stringify(productos , null,2)); 
           return res.redirect('/');
        } 
       }); 
       
      

    },
   
  delete: (req, res) =>{
    const productos = read(propath);
    const productosFiltrados = productos.filter(producto => producto.id != req.params.id);
    fs.writeFileSync(propath, JSON.stringify(productosFiltrados,null,2));
     return res.redirect("/");
    
}
}

module.exports = controllers;