module.exports = {
  //user
  createUser: require("./users/createUser"),
  getUser: require("./users/getUser"),
  updateUser: require("./users/updateUser"),
  deleteUser: require("./users/deleteUser"),
  getUserById: require("./users/getUserById"),

  //roles
  createRole: require("./common/role"),

  //Product
  createProduct: require("./product/createProduct"),
  createBulkProduct: require("./product/createBulkProduct"),
  getProduct: require("./product/getProduct"),
  updateProduct: require("./product/updateProduct"),
  deleteProduct: require("./product/deleteProduct"),
  getProductById: require("./product/getProductById"),
  getProductByCategory: require("./product/getProductByCategory"),
  getCategory: require("./product/getCategory"),
  getProductDetails: require("./product/getProductDetails"),
  //login
  login: require("./common/login"),
};
