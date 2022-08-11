module.exports= function(sequelize,dataTypes){
    let alias='user';
    let cols={};
    let config={};
    const User = sequelize.define(alias,cols,config); 
    Product.associate=function(models){
        
    }
    return User;
}