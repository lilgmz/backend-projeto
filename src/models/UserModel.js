const { DataTypes, Model } = require("sequelize");
const connection = require('../config/connection');

class UserModel extends Model {}

UserModel.init({
    firstname: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'UserModel',
});