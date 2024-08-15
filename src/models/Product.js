const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,  // Define o valor padrão como 0 (false)
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,  // Define o valor padrão como 0 (false)
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,  // Define o valor padrão como 0
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,  // Preenchimento opcional
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    price_with_discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: true,  // Adiciona as colunas created_at e updated_at automaticamente
    tableName: 'products',
});

module.exports = Product;
