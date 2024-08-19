const UserModel = require('../models/UserModel');

class UserController {

    // Listar todos os usuários
    async listar(request, response) {
        try {
            const dados = await UserModel.findAll();
            return response.json(dados);
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            return response.status(500).json({ message: "Erro ao listar usuários" });
        }
    }

    // Consultar um usuário por ID
    async consultarPorId(request, response) {
        const id = request.params.id;
        try {
            const dados = await UserModel.findByPk(id);
            if (dados) {
                return response.json(dados);
            } else {
                return response.status(404).json({ message: "Usuário não encontrado" });
            }
        } catch (error) {
            console.error("Erro ao consultar usuário:", error);
            return response.status(500).json({ message: "Erro ao consultar usuário" });
        }
    }

    // Criar um novo usuário
    async criar(request, response) {
        const body = request.body;
        try {
            const novoUsuario = await UserModel.create(body);
            return response.status(201).json({
                message: "Usuário cadastrado com sucesso",
                data: novoUsuario
            });
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            return response.status(500).json({ message: "Erro ao criar usuário" });
        }
    }

    // Atualizar um usuário existente
    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        try {
            const [updated] = await UserModel.update(body, {
                where: { id: id }
            });
            if (updated) {
                const usuarioAtualizado = await UserModel.findByPk(id);
                return response.json({
                    message: "Usuário atualizado com sucesso",
                    data: usuarioAtualizado
                });
            }
            return response.status(404).json({ message: "Usuário não encontrado" });
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            return response.status(500).json({ message: "Erro ao atualizar usuário" });
        }
    }

    // Deletar um usuário existente
    async deletar(request, response) {
        const id = request.params.id;
        try {
            const deleted = await UserModel.destroy({
                where: { id: id }
            });
            if (deleted) {
                return response.json({ message: "Usuário deletado com sucesso" });
            }
            return response.status(404).json({ message: "Usuário não encontrado" });
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            return response.status(500).json({ message: "Erro ao deletar usuário" });
        }
    }
}

module.exports = UserController;