module.exports = function(sequelize, dataTypes){
    let alias= "Pais";

    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING 
        }
    }
    let config= {
        tableName:"country", 
        timestamps: false
    }

    let Pais= sequelize.define(alias, cols, config);
    //pais tiene relacion one-to-many de un pais con varios productos.. 
    Pais.associate= function(models){
        Pais.hasMany(models.Producto,{
            //oneToMany: hasMany... un pais tiene muchos productos
            as: "pais_producto", //forma en que llamamos esa relacion.. del pais pediré los muchos productos que tiene 
            foreignKey: "country_id"
          });

    //relacion one-to-many de pais-marcas:    
        Pais.hasMany(models.Marca,{
            //oneToMany: hasMany... un pais tiene muchas marcas
            as: "pais_marca", //forma en que llamamos esa relacion.. del pais pediré las muchas marcas que tiene 
            foreignKey: "country_id"
          });
    } 
     
    
    return Pais;
}

