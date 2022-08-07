module.exports = function(sequelize, dataTypes){
    let alias= "Usuario";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING 
        },
        last_name: {
            type: dataTypes.STRING 
        }
        email:{
             type: dataTypes.STRING
        }
        password:{
            type: dataTypes.STRING
        }

    }

    let Usuario= sequelize.define(alias, cols, config);

    
    return Usuario;
}

