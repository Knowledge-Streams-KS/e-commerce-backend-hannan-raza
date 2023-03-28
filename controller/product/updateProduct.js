const productService = require('../../services/productServices')
module.exports= async function(req,res){
    const data= await productService.updateProduct(req.body);
    res.send(data);
}