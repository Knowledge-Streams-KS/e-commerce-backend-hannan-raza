const { Sequelize, Model, DataTypes } = require("sequelize");
let sequelize = require("../../common/dbConnection");
class Product extends Model {}
Product.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },

    title: {
      type: DataTypes.STRING(),
      allowNull: false,
    },

    description: {
      allowNull: false,
      type: DataTypes.STRING(1234),
    },

    price: {
      allowNull: false,
      type: DataTypes.DOUBLE(),
    },

    category: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Product",
  }
);
module.exports = Product;
