module.exports = function(sequelize, dataTypes){
    let alias= "Producto";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING 
        },
        description: {
            type: dataTypes.STRING 
        },
        price:{
             type: dataTypes.STRING
        },
        country_id:{
            type: dataTypes.INTEGER
        }, 
        category:{
            type: dataTypes.INTEGER
        }, 
        discount:{
            type:dataTypes.DECIMAL
        },
        condition:{
            type: dataTypes.STRING
        },
        brand_id:{
            type: dataTypes.INTEGER
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

    
    return Producto;
}

