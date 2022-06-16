
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000; 
const app = express();

const mainRouter = require("./router/mainRouter");
const userRouter = require("./router/userRouter");
const prodRouter = require("./router/prodRouter");
const adminRouter = require("./router/adminRouter");


const publicPath= path.resolve(__dirname, '../public');




app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(publicPath));

app.use("/", mainRouter);

app.get('/',(req,res)=>{res.render(path.resolve(__dirname,'./views/home'))});


app.use('/', userRouter);
app.use('/', userRouter); 
app.use('/', prodRouter);
app.use('/', prodRouter);
app.use('/', adminRouter);
app.use('/', adminRouter);



app.listen(PORT,()=> {console.log(`Servidor corriendo en el puerto ${PORT}`);});