const { models } = require("../model/definations");
const data1 = require("../data.json");

module.exports = {
  createProduct: async function (body) {
    const result = await models.Product.create(body);
    return result;
  },

  createBulkProduct: async function () {
    const result = await models.Product.bulkCreate(data1);
    return result;
  },
  getProduct: async function () {
    const result = await models.Product.findAll({});
    return result;
  },

  getCategory: async function () {
    const result = await models.Product.findAll({});
    const arr = result.map((element) => element.category);
    const data = arr.filter(
      (element, index, arr2) => arr2.indexOf(element) == index
    );
    return data;
  },
  getProductById: async function (ids) {
    const result = await models.Product.findAll({
      where: { id: ids },
    });
    return result;
  },

  getProductDetails: async function (ids) {
    const result = await models.Product.findAll({
      where: { id: ids },
    });
    const titles = result.map((product) => product.title)[0];
    const price = result.map((product) => product.price)[0];
    const description = result.map((product) => product.description)[0];
    const image = result.map((product) => product.image)[0];

    const res = {
      titles: titles,
      price: price,
      description: description,
      image: image,
    };

    return res;
  },

  getProductByCategory: async function (category) {
    const result = await models.Product.findAll({
      where: { category: category },
    });
    return result;
  },
  updateProduct: async function (body) {
    const result = await models.Product.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
  deleteProduct: async function (id) {
    const result = await models.Product.destroy({
      where: { id: id },
    });
    return "Deleted a User";
  },
};
