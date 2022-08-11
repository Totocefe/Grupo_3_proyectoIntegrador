module.exports = function(sequelize, dataTypes){
    let alias= "Usuario";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        users_id:{
            type: dataTypes.INTEGER
        },
        products_id:{
            type:dataTypes.INTEGER
        }

    }
    let config= {
        tableName:"cart", 
        timestamps: false
    }

    let Carrito_compra= sequelize.define(alias, cols, config);
//*****dudotaaa: tomás habrá pensado la tabla chart de carrito como la tabla intermedia ya de un pedido?
// es decir de la relacion manytomany de muchos usuarios muchos productos?
//si si se tiene pedido.. pero faltaría "compra-final" y así?


    Carrito_compra.associate= function(models){
        Carrito_compra.hasMany(models.Producto,{
            //oneToMany: hasMany... un carrito tiene muchos productos
            as: "pedido_productos", //nombre rel.. del carrito pediré los muchos productos que tiene 
            foreignKey: "products_id"
          });
        //onetomany:  carrito-usuario carrito pertenece a usuario unico..
        Carrito_compra.belongsTo(models.Usuario,{
            as:"pedido_usuario",
            foreignKey: "users_id" //**checar si no es un cart_id faltante como columna en tabla de Usuario!!
        })
    }

    return Carrito_compra;
}

