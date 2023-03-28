const { model } = require("../model/definations");
const userModel = require("../model/productModel");
const data1 = require("../data.json");

module.exports = {
  createProduct: async function (body) {
    const data = await userModel.createProduct(body);
    return data;
  },

  createBulkProduct: async function () {
    const data = await userModel.createBulkProduct();
    return data;
  },

  getProduct: async function () {
    const result = await userModel.getProduct();
    return result;
  },

  getCategory: async function () {
    const result = await userModel.getCategory();
    return result;
  },
  updateProduct: async function (body) {
    const result = await userModel.updateProduct(body);
    return result;
  },
  getProductById: async function (body) {
    const result = await userModel.getProductById(body);
    return result;
  },

  getProductByCategory: async function (category) {
    const result = await userModel.getProductByCategory(category);
    return result;
  },
  deleteProduct: async function (id) {
    const result = await userModel.deleteProduct(id);
    return result;
  },

  getProductDetails: async function (id) {
    const result = await userModel.getProductDetails(id);
    return result;
  },
};
