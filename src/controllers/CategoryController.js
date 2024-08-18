const CategoryModel = require("../models/CategoryModel")

const categoryModel = new CategoryModel();

class CategoryController {

    listar(request, response){
        const dados = categoryModel.listar();
        return response.json(dados);
    }

    consultarPorId(request, response){
        const id = request.params.id;
        const dados = categoryModel.consultarPorId(id);
        return response.json(dados);
    }

    criar(request, response){
        const body = request.body;
        categoryModel.criar(body);
        return response.status(201).json({
            message: "Categoria cadastrado com sucesso"
        })
    }

    atualizar(request, response){
        const id = request.params.id;
        const body = request.body;
        categoryModel.atualizar(id, body)
        return response.json({
            message: "Categoria atualizado com sucesso"
        })
    }

    deletar(request, response){
        const id = request.params.id;
        categoryModel.deletar(id);
        return response.json({
            message: "Categoria deletado com sucesso"
        })
    }
}

module.exports = CategoryController;