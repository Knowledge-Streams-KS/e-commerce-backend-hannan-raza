const userService = require('../../services/productServices')
module.exports= async function(req,res){
    const data= await userService.deleteUser(req.query.id);
    res.send(data);
}