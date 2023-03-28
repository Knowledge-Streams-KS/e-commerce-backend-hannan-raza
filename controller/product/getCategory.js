const productService = require("../../services/productServices");
module.exports = async function (req, res) {
  const data = await productService.getCategory();
  res.send(data);
};
