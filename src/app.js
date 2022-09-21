
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001; 
const app = express();
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const cors = require('cors');

const session = require("express-session");// primero va el require de session y despues el middleware de session por una cuestion logiica de q no puedo aplicar algo q todavia no esta configurado
const middlewareDeSession = require ('./middleware/userLogged');// requiero el middleware de session. al ponerla aca la estoy declarando de manera global en vez de ponerlo en cada ruta
const cookieParser = require("cookie-parser");

const mainRouter = require("./router/mainRouter");
const userRouter = require("./router/userRouter");
const prodRouter = require("./router/prodRouter");
const adminRouter = require("./router/adminRouter");
const apiProductRouter= require('./router/api/apiProductRouter');
const apiUserRouter = require('./router/api/apiUserRouter');

const publicPath= path.resolve(__dirname, '../public');




app.set('view engine', 'ejs'); // estos 2 son para ejecutar ejs
app.set('views',path.join(__dirname, 'views'));

app.use(cors());
app.use(session({secret: "secretosssss", resave: false, saveUninitialized: false,})); // configuro session a partir de ahora tengo disponible a session desde cualquier llamandolo desde el req (req.session)
app.use(middlewareDeSession); // pongo a usar el middleware de session
app.use(express.static(publicPath));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
// las siguientes lineas son para poder obtener la informacion q nos llega desde un formulario, va siempre antes de las rutas
app.use(express.json()); // middleware q permite leer informacion q llega de un formulario
app.use(express.urlencoded({ extended: false }));// es un middleware permite recibir info de 1 formulario

app.use("/", mainRouter);


app.use('/user', userRouter);
app.use('/api/user', apiUserRouter);

app.use('/product', prodRouter);
app.use('/api/product', apiProductRouter);

app.use('/admin', adminRouter);

app.use((req,res,next)=>{res.status(404).send('not-found');})

app.listen(PORT,()=> {console.log(`Servidor corriendo en el puerto ${PORT}`);});