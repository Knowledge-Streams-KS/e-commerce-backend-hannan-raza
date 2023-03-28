const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Cart extends Model {};
Cart.init(
    {
        cartId:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Cart"
    }
)
module.exports = Cart;