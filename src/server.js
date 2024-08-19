const express = require('express');
const cors = require('cors');
const RotasPrivadas = require('./routes/RotasPrivadas');
const RotasPublicas = require('./routes/RotasPublicas');
const connection = require('./config/connection'); // Conexão com o banco de dados

const host = 'localhost';
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

// Rota raiz
app.get('/', (request, response) => {
    return response.send("Olá Mundo");
});

// Rotas públicas
app.use(RotasPublicas);

// Rotas privadas
app.use(RotasPrivadas);

//Exibir link do servidor no terminal
app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);
});

// Sincronização com o banco de dados
connection.sync().then(() => {
    console.log('Conexão com o banco de dados estabelecida.');
    
}).catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
});