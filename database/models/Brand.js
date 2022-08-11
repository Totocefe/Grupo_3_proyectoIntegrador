module.exports= function(sequelize,dataTypes){
    let alias='brand';
    let cols={};
    let config={};
    const Brand = sequelize.define(alias,cols,config); 
    Product.associate=function(models){
        
    }
    return Brand;
}