module.exports = function(req,res,next){ // los middlewares q no son nativos llevan el req res y ademas el next
    
    if(req.session && req.session.user){ //
        res.locals.user = req.session.user; // locals es una variable q existe en las vistas (locals existe en el response). en esta linea estoy agregando user a la variable locals. session.user esta creado en el controller de login 
         //el user de locals es el user q voy a usar en las vistas (al cual le estoy asignando el valor q le di al req.session en el controller)
    }
    next(); // si la condicion de arriba se cumple (true) se ejecuta el codigo sino se cumple (false) se ejecuta el next, como esto va a ir en una ruta el next da paso a lo q sigue
}  