const sequelize = require('./config/connection');
const express = require('express')
const cors = require('cors')
const Product = require('./models/Product');
const Category = require('./models/Category');
const User = require('./models/User');

const host = "localhost"
const port = 3000;

const app = express()
app.use(express.json())
app.use(cors());

app.get('/', (request, response) => {
    return response.send("Olá, eu sou um Backend com NodeJS + Express")
});

sequelize.sync({ force: false })  // use 'force: true' se quiser recriar a tabela
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    app.listen(port, host, () => {
        console.log(`Servidor executando em http://${host}:${port}`)
    });
