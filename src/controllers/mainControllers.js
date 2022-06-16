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
    login: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/register'))

    },
    productCart: (req, res) =>{res.render(path.resolve(__dirname,'../views/products/productCart'))

    },
    productDetail: (req, res) =>{res.render(path.resolve(__dirname,'../views/products/productDetail'))

    },
    register: (req, res) =>{res.render(path.resolve(__dirname,'../views/users/register'))

    }
    
}

module.exports = controllers;