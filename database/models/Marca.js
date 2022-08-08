module.exports = function(sequelize, dataTypes){
    let alias= "Marca";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
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

    
    return Marca;
}
