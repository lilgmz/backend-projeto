const { Sequelize } = require("sequelize")

const connection = new Sequelize({
    dialect: "mysql",
    database: "backendgeracao",
    host: "localhost", 
    username: "root",
    password: "senha",
    port: 3306
});

connection.sync()

module.exports = connection;