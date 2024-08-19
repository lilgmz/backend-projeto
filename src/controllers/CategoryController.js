const CategoryModel = require("../models/CategoryModel");

class CategoryController {
    // Listar todas as categorias
    async listar(request, response) {
        try {
            const dados = await CategoryModel.findAll();
            return response.json(dados);
        } catch (error) {
            return response.status(500).json({ message: "Erro ao listar categorias", error: error.message });
        }
    }

    // Consultar uma categoria por ID
    async consultarPorId(request, response) {
        try {
            const id = request.params.id;
            const dados = await CategoryModel.findByPk(id);
            if (dados) {
                return response.json(dados);
            } else {
                return response.status(404).json({ message: "Categoria não encontrada" });
            }
        } catch (error) {
            return response.status(500).json({ message: "Erro ao consultar categoria", error: error.message });
        }
    }

    // Criar uma nova categoria
    async criar(request, response) {
        try {
            const body = request.body;
            const novaCategoria = await CategoryModel.create(body);
            return response.status(201).json({
                message: "Categoria cadastrada com sucesso",
                categoria: novaCategoria
            });
        } catch (error) {
            return response.status(500).json({ message: "Erro ao criar categoria", error: error.message });
        }
    }

    // Atualizar uma categoria existente
    async atualizar(request, response) {
        try {
            const id = request.params.id;
            const body = request.body;
            const categoria = await CategoryModel.findByPk(id);

            if (categoria) {
                await categoria.update(body);
                return response.json({ message: "Categoria atualizada com sucesso" });
            } else {
                return response.status(404).json({ message: "Categoria não encontrada" });
            }
        } catch (error) {
            return response.status(500).json({ message: "Erro ao atualizar categoria", error: error.message });
        }
    }

    // Deletar uma categoria existente
    async deletar(request, response) {
        try {
            const id = request.params.id;
            const categoria = await CategoryModel.findByPk(id);

            if (categoria) {
                await categoria.destroy();
                return response.json({ message: "Categoria deletada com sucesso" });
            } else {
                return response.status(404).json({ message: "Categoria não encontrada" });
            }
        } catch (error) {
            return response.status(500).json({ message: "Erro ao deletar categoria", error: error.message });
        }
    }
}

module.exports = CategoryController;