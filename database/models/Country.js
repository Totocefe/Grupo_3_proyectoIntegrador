module.exports= function(sequelize,dataTypes){
    let alias='country';
    let cols={};
    let config={};
    const Country = sequelize.define(alias,cols,config); 
    Product.associate=function(models){
        
    }
    return Country;
}