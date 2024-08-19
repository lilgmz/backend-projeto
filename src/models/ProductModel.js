const connection = require('../config/connection');
const { DataTypes, Model } = require("sequelize")

class ProductModel extends Model {}

ProductModel.init({
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
    }, {
        sequelize: connection,
        modelName: 'ProductModel',

});


module.exports = ProductModel;