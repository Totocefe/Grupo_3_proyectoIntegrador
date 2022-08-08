module.exports = function(sequelize, dataTypes){
    let alias= "Usuario";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING 
        },
        last_name: {
            type: dataTypes.STRING 
        },
        email:{
             type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        }, 
        age:{
            type: dataTypes.INTEGER
        }, 
        country_id:{
            type:dataTypes.INTEGER
        }

    }
    let config= {
        tableName:"users", 
        timestamps: false
    }

    let Usuario= sequelize.define(alias, cols, config);

    //ahora vamos por los cruces de tablas; explicitar que un usuario tiene muchos productos asociados y viceversa.
    //como es manytomany: hay tabla intermedia "products_users" tons agregamos campo: through
    //***relación manyToMany usa dos llamadas belongsToMany****
    Usuario.associate= function(models){
        Usuario.belongsToMany(models.Producto,{
            //configurando y explicando esta relacion: duda: no debería poner carritos en vez de productos?
            as: "productos", //porque del usuario voy a pedir "los muchos productos 11:54 video playground clase33
            through: "products_users",
            foreignKey: "users_id",
            otherKey: "products_id", //especifica que hay oootra clave foránea
            timestamps: false //como hay tabla intermedia aclarar si tiene timestamps
        }
        //otra relación? por el manyToMany?  
        );

    }

    return Usuario;
}

