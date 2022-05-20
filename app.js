const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000; 
const app = express();

const publicPath= path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(PORT,()=> {console.log(`Servidor corriendo en el puerto ${PORT}`);});
app.get('/',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/home.html'))});
app.get('/register.html',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/register.html'))});
app.get('/login.html',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/login.html'))}); 
app.get('/productDetail.html',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/productDetail.html'))});
app.get('/productCard.html',(req,res)=>{res.sendFile(path.resolve(__dirname,'./views/productCard.html'))});       