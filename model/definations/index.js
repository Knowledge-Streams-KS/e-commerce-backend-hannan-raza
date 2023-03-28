const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const  User  = require('./users');
const  Orders  = require('./orders');
const Cart  = require('./cart');
const  Product  = require('./product');
const  Roles  = require('./roles');
const CartItems = require('./cartItems');
const models = {
    User,Orders,Cart,Product,Roles,CartItems,
};

//roles-users one-to-many
Roles.hasMany(User,{onDelete:"CASCADE",foreignKey:'roleId'});
User.belongsTo(Roles,{onDelete:"CASCADE",foreignKey:'roleId'});

//user-cart one-to-one
User.hasOne(Cart,{onDelete:"CASCADE",foreignKey:'UserId'});
Cart.belongsTo(User,{onDelete:"CASCADE",foreignKey:'UserId'});

//Product-CartItems one-to-many
Product.hasMany(CartItems,{onDelete:"CASCADE",foreignKey:'productId'});
CartItems.belongsTo(Product,{onDelete:"CASCADE",foreignKey:'productId'});

//Cart-CartItems one-to-many
Cart.hasMany(CartItems,{onDelete:"CASCADE",foreignKey:'cartId'});
CartItems.belongsTo(Cart,{onDelete:"CASCADE",foreignKey:'cartId'});

sequelize.models=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;
module.exports={db,models};