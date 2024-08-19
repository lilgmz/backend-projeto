const ProductModel = require('../models/ProductModel');

class ProductController {

    //Listar todos os produtos
    async listar(request, response) {
        try {
            const produtos = await ProductModel.findAll(); // Método estático findAll do Sequelize
            return response.json(produtos);
        } catch (error) {
            return response.status(500).json({ message: "Erro ao listar produtos", error });
        }
    }

    // Consultar um produto por ID
    async consultarPorId(request, response) {
        const id = request.params.id;
        try {
            const produto = await ProductModel.findByPk(id); // Método estático findByPk do Sequelize
            if (produto) {
                return response.json(produto);
            }
            return response.status(404).json({ message: "Produto não encontrado" });
        } catch (error) {
            return response.status(500).json({ message: "Erro ao consultar produto", error });
        }
    }

    // Criar um novo produto
    async criar(request, response) {
        const body = request.body;
        try {
            const novoProduto = await ProductModel.create(body); // Método estático create do Sequelize
            return response.status(201).json({
                message: "Produto cadastrado com sucesso",
                produto: novoProduto
            });
        } catch (error) {
            return response.status(500).json({ message: "Erro ao cadastrar produto", error });
        }
    }

    // Atualizar um produto existente
    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        try {
            const produto = await ProductModel.findByPk(id); // Método estático findByPk do Sequelize
            if (produto) {
                await produto.update(body); // Método de instância update do Sequelize
                return response.json({
                    message: "Produto atualizado com sucesso",
                    produto
                });
            }
            return response.status(404).json({ message: "Produto não encontrado" });
        } catch (error) {
            return response.status(500).json({ message: "Erro ao atualizar produto", error });
        }
    }

    // Deletar um produto existente
    async deletar(request, response) {
        const id = request.params.id;
        try {
            const produto = await ProductModel.findByPk(id); // Método estático findByPk do Sequelize
            if (produto) {
                await produto.destroy(); // Método de instância destroy do Sequelize
                return response.json({
                    message: "Produto deletado com sucesso"
                });
            }
            return response.status(404).json({ message: "Produto não encontrado" });
        } catch (error) {
            return response.status(500).json({ message: "Erro ao deletar produto", error });
        }
    }
}

module.exports = ProductController;