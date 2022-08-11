module.exports= function(sequelize,dataTypes){
    let alias='product';
    let cols={};
    let config={};
    const Product = sequelize.define(alias,cols,config); 
    Product.associate=function(models){

    };
    return Product;
}