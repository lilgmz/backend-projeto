const { DataTypes, Model } = require("sequelize");
const connection = require('../config/connection');

class CategoryModel extends Model {}

CategoryModel.init({
    name: { 
        type: DataTypes.STRING(45),
        allowNull: false, // NOT NULL
    },
    slug: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
    }
}, {
    sequelize: connection, // Conexão com o banco de dados
    modelName: 'CategoryModel', // Nome do modelo
});

module.exports = CategoryModel;