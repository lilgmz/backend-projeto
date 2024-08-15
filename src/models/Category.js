const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
}, {
    timestamps: true,  // Adiciona as colunas created_at e updated_at automaticamente
    tableName: 'categories',
});

module.exports = Category;
