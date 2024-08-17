const connection = require('../config/connection');
const { DataTypes } = require("sequelize")

const CategoryModel = connection.define(
    "CategoryModel", {
        name:{ 
           type: DataTypes.STRING(45),
           allowNull: false, //NOT NULL
        },
        slug:{
            type: DataTypes.STRING(45),
           allowNull: false, 
        },
        use_in_menu:{
            type: DataTypes.BOOLEAN,
        }
    }
);


module.exports = CategoryModel;