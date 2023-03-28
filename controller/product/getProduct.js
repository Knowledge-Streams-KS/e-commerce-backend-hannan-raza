const productService = require('../../services/productServices')
module.exports= async function(req,res){
    const data= await productService.getProduct();
    res.send(data);
}