const productService = require("../../services/productServices");
module.exports = async function (req, res) {
  const data = await productService.createBulkProduct(req.body);
  res.send(data);
};
