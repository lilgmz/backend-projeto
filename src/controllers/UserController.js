const UserModel = require('../models/UserModel');

class UserController {

    listar(request, response){
        const dados = UserModel.listar();
        return response.json(dados);
    }

    consultarPorId(request, response){
        const id = request.params.id;
        const dados = UserModel.consultarPorId(id);
        return response.json(dados);
    }

    criar(request, response){
        const body = request.body;
        UserModel.criar(body);
        return response.status(201).json({
            message: "Usuário cadastrado com sucesso"
        })
    }

    atualizar(request, response){
        const id = request.params.id;
        const body = request.body;
        UserModel.atualizar(id, body)
        return response.json({
            message: "Usuário atualizado com sucesso"
        })
    }

    deletar(request, response){
        const id = request.params.id;
        UserModel.deletar(id);
        return response.json({
            message: "Usuário deletado com sucesso"
        })
    }
}

module.exports = UserController;