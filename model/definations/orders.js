const { Sequelize, Model,DataTypes } = require('sequelize');
let sequelize = require("../../common/dbConnection")
class Orders extends Model {};
Orders.init(
    {
        OrderId:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type:DataTypes.INTEGER,
        },

        orderDate:{
            allowNull:false,
            type:DataTypes.STRING(),
        },
    },
    {
        timestamps:true,
        paranoid:true,
        sequelize: sequelize,
        modelName:"Orders"
    }
)
module.exports = Orders;