
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000; 
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const session = require("express-session");
const cookieParser = require("cookie-parser");

const mainRouter = require("./router/mainRouter");
const userRouter = require("./router/userRouter");
const prodRouter = require("./router/prodRouter");
const adminRouter = require("./router/adminRouter");


const publicPath= path.resolve(__dirname, '../public');




app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(publicPath));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false }));

app.use("/", mainRouter);


app.use('/user', userRouter);
//app.use('/', userRouter); 
app.use('/product', prodRouter);
//app.use('/', prodRouter);
app.use('/admin', adminRouter);
//app.use('/', adminRouter);



app.listen(PORT,()=> {console.log(`Servidor corriendo en el puerto ${PORT}`);});