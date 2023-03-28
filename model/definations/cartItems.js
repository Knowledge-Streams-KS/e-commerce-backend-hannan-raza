const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class CartItems extends Model {};
CartItems.init(
    {
        cartItemsId:{
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
        modelName:"CartItems"
    }
)
module.exports = CartItems;