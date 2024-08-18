const ProductModel = require("../models/ProductModel")

const productModel = new ProductModel();

class ProductController {

    listar(request, response){
        const dados = productModel.listar();
        return response.json(dados);
    }

    consultarPorId(request, response){
        const id = request.params.id;
        const dados = productModel.consultarPorId(id);
        return response.json(dados);
    }

    criar(request, response){
        const body = request.body;
        productModel.criar(body);
        return response.status(201).json({
            message: "Produto cadastrado com sucesso"
        })
    }

    atualizar(request, response){
        const id = request.params.id;
        const body = request.body;
        productModel.atualizar(id, body)
        return response.json({
            message: "Produto atualizado com sucesso"
        })
    }

    deletar(request, response){
        const id = request.params.id;
        productModel.deletar(id);
        return response.json({
            message: "Produto deletado com sucesso"
        })
    }
}

module.exports = ProductController;