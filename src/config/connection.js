const { Sequelize } = require("sequelize")

const connection = new Sequelize({
    dialect: "mysql",
    database: "geracaotech",
    host: "localhost", 
    username: "root",
    password: "senha",
    port: 3306
});

console.log(connection);