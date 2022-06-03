const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000; 
const app = express();

const publicPath= path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.listen(PORT,()=> {console.log(`Servidor corriendo en el puerto ${PORT}`);});
app.get('/',(req,res)=>{res.render(path.resolve(__dirname,'./views/home'))});
app.get('/register',(req,res)=>{res.render(path.resolve(__dirname,'./views/register'))});
app.get('/login',(req,res)=>{res.render(path.resolve(__dirname,'./views/login'))}); 
app.get('/productDetail',(req,res)=>{res.render(path.resolve(__dirname,'./views/productDetail'))});
app.get('/productCart',(req,res)=>{res.render(path.resolve(__dirname,'./views/productCart'))});       