
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000; 
const app = express();

const mainRouter = require("./router/mainRouter");


const publicPath= path.resolve(__dirname, '../public');




app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(publicPath));

app.use("/", mainRouter);

app.get('/',(req,res)=>{res.render(path.resolve(__dirname,'./views/home'))});


app.get('/register',(req,res)=>{res.render(path.resolve(__dirname,'./views/users/register'))});
app.get('/login',(req,res)=>{res.render(path.resolve(__dirname,'./views/users/login'))}); 
app.get('/productDetail',(req,res)=>{res.render(path.resolve(__dirname,'./views/products/productDetail'))});
app.get('/productCart',(req,res)=>{res.render(path.resolve(__dirname,'./views/products/productCart'))});
app.get('/crearProd',(req,res)=>{res.render(path.resolve(__dirname,'./views/products/crearProd'))});
app.get('/editarProd',(req,res)=>{res.render(path.resolve(__dirname,'./views/products/editarProd'))});



app.listen(PORT,()=> {console.log(`Servidor corriendo en el puerto ${PORT}`);});