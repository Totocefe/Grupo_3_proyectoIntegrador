module.exports = function(sequelize, dataTypes){
    let alias= "Usuario";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        users_id:{
            type: dataTypes.INTEGER
        } 
        products_id:{
            type:dataTypes.INTEGER
        }

    }
    let config= {
        tableName:"cart", 
        timestamps: false
    }

    let Carrito_compra= sequelize.define(alias, cols, config);

    
    return Carrito_compra;
}

