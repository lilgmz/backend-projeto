const UserModel = require('../src/models/UserModel')
const ProductModel = require('../src/models/ProductModel')
const CategoryModel = require('../src/models/CategoryModel')
const cors = require('cors')
const express = require('express')

const host = 'localhost'
const port = 3000



const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    return response.send("Olá Mundo")
});



app.use(ProductModel)
app.use(CategoryModel)

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`)
});