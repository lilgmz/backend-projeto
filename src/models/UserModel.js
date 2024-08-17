const connection = require('../config/connection');
const { DataTypes } = require("sequelize")

const UserModel = connection.define(
    "UserModel", {
        firstname:{ 
           type: DataTypes.STRING(45),
           allowNull: false, //NOT NULL
        },
        surname:{
            type: DataTypes.STRING(45),
           allowNull: false, 
        },
        email:{
            type: DataTypes.STRING(70),
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }
);


module.exports = UserModel;