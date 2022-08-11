module.exports= function(sequelize,dataTypes){
    let alias='cart';
    let cols={};
    let config={};
    const Cart = sequelize.define(alias,cols,config); 
    Product.associate=function(models){
        
    }
    return Cart;
}