const connection = require('../config/connection');
const { DataTypes } = require("sequelize")

const ProductModel = connection.define(
    "ProductModel", {
        enable:{ 
           type: DataTypes.BOOLEAN,
        },
        name:{
            type: DataTypes.STRING(45),
            allowNull: false, 
        },
        slug:{
            type: DataTypes.STRING(70),
            allowNull: false
        },
        use_in_menu:{
            type: DataTypes.BOOLEAN,
        },
        stock:{
            type: DataTypes.INTEGER,
        },
        description:{
            type: DataTypes.STRING(255),
        },
        price:{
            type: DataTypes.FLOAT(5, 2),
            allowNull: false
        },
        price_with_discount:{
            type: DataTypes.FLOAT(5, 2),
            allowNull: false
        }
    }
);


module.exports = ProductModel;