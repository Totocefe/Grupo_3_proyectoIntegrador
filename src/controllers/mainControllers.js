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
    productDetail: (req, res) =>{
            const id = req.params.id;
            const productos = read(propath);
            const producto = productos.find(product => product.id == id);
		       return res.render("../views/products/productDetail", { producto })
    },
    register: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/register'))

    },
    create: (req,res)=>{res.render(path.resolve(__dirname,'../views/admin/crearProd'))

    },

    store:(req,res)=>{
      const productos = read(propath)
		const producto={
			id:productos[productos.length-1].id+1,
			name: req.body.name,
			price: req.body.price,
      origin: req.body.origin,
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
        const productos = read(propath);
     
       productos.forEach(producto => {
          if (producto.id == id){
           
            producto.name = req.body.name;
            producto.description = req.body.description;
            producto.category = req.body.category;
            producto.price = req.body.price;
            producto.origin = req.body.origin;
           producto.discount = req.body.discount;
           producto.condition = req.body.condition;
           
           
        }  
       }); 
      
       fs.writeFileSync(propath, JSON.stringify(productos , null,2)); 
        return res.redirect('/');
      

    },
   
  destroy: (req, res) =>{
    const productos = read(propath);
    const productosFiltrados = productos.filter(producto => producto.id != req.params.id);
    fs.writeFileSync(propath, JSON.stringify(productosFiltrados,null,2));
     return res.redirect("/");
    
}
}

module.exports = controllers;