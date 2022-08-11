module.exports = function(sequelize, dataTypes){
    let alias= "Marca";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING 
        },

        country_id:{
            type:dataTypes.INTEGER
        }

    }
    let config= {
        tableName:"brands", 
        timestamps: false
    }

    let Marca= sequelize.define(alias, cols, config);

    Marca.associate= function(models){
        Marca.hasMany(models.Producto,{
            //oneToMany: hasMany... una marca tiene muchos productos
            as: "productos", //forma en que llamamos esa relacion.. de la marca pediré los muchos productos que tiene 
            foreignKey: "brand_id"
          });
    }    
    return Marca;
}

