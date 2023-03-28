var express = require("express");
var router = express.Router();

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  createBulkProduct,
  getProductByCategory,
  getCategory,
  getProductDetails,
} = require("../controller/index");
// const { getCategory } = require("../model/productModel");
// const { getProductByCategort } = require("../model/productModel");

router.post("/createProduct", createProduct);
router.post("/createBulkProduct", createBulkProduct);
router.get("/getProduct", getProduct);
router.put("/updateProduct", updateProduct);
router.delete("/deleteProduct", deleteProduct);
router.get("/getProductById", getProductById);
router.get("/getProductByCategory", getProductByCategory);
router.get("/getCategory", getCategory);
router.get("/getProductDetails", getProductDetails);
module.exports = router;
