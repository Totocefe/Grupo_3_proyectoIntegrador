
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000; 
const app = express();

const mainRouter = require("./router/mainRouter");
const userRouter = require("./router/userRouter");
const prodRouter = require("./router/prodRouter");

const publicPath= path.resolve(__dirname, '../public');




app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(publicPath));

app.use("/", mainRouter);

app.get('/',(req,res)=>{res.render(path.resolve(__dirname,'./views/home'))});


app.use('/register', userRouter);
app.use('/login',userRouter); 
app.use('/productDetail', prodRouter);
app.use('/productCart',prodRouter);
app.get('/crearProd',(req,res)=>{res.render(path.resolve(__dirname,'./views/products/crearProd'))});
app.get('/editarProd',(req,res)=>{res.render(path.resolve(__dirname,'./views/products/editarProd'))});



app.listen(PORT,()=> {console.log(`Servidor corriendo en el puerto ${PORT}`);});