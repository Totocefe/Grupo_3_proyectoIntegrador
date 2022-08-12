module.exports = function(sequelize, dataTypes){
    let alias= "Producto";

    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING 
        },
        description: {
            type: dataTypes.STRING 
        },
        price:{
             type: dataTypes.DECIMAL.UNSIGNED
        },
        country_id:{
            type: dataTypes.INTEGER.UNSIGNED
        }, 
        categorie:{
            type: dataTypes.STRING
        }, 
        discount:{
            type:dataTypes.DECIMAL.UNSIGNED
        },
        condicion:{
            type: dataTypes.STRING
        },
        brand_id:{
            type: dataTypes.INTEGER.UNSIGNED
        },
        image:{
            type: dataTypes.INTEGER
        }

    }
    let config= {
        tableName:"products", 
        timestamps: false
    }

    let Producto= sequelize.define(alias, cols, config);


    //ahora vamos por los cruces de tablas; explicitar que un producto puede tener muchos usuarios asociados etc.
    Producto.associate= function(models){
        Producto.belongsToMany(models.Usuario, {
            //configurando y explicando esta relacion:
            as: "productos", //porque del usuario voy a pedir "los muchos productos 11:54 video playground clase33
            through: "products_users",
            foreignKey: "users_id",
            otherKey:"products_id",
            timestamps: false
        });
        
        Producto.belongsTo(models.Marca,{ //un producto tiene una marca rel onetomany
            as: "marca_producto",
            foreignKey:"brand_id"
        });
    }
    
    return Producto;
}

