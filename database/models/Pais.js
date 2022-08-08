module.exports = function(sequelize, dataTypes){
    let alias= "Pais";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING 
        }
    }
    let config= {
        tableName:"country", 
        timestamps: false
    }

    let Pais= sequelize.define(alias, cols, config);

    
    return Pais;
}

