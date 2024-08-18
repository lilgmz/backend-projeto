const UserModel = require('../models/UserModel');

const userModel = new UserModel();

class UserController {

    listar(request, response){
        const dados = userModel.listar();
        return response.json(dados);
    }

    consultarPorId(request, response){
        const id = request.params.id;
        const dados = userModel.consultarPorId(id);
        return response.json(dados);
    }

    criar(request, response){
        const body = request.body;
        userModel.criar(body);
        return response.status(201).json({
            message: "Usuário cadastrado com sucesso"
        })
    }

    atualizar(request, response){
        const id = request.params.id;
        const body = request.body;
        userModel.atualizar(id, body)
        return response.json({
            message: "Usuário atualizado com sucesso"
        })
    }

    deletar(request, response){
        const id = request.params.id;
        userModel.deletar(id);
        return response.json({
            message: "Usuário deletado com sucesso"
        })
    }
}

module.exports = UserController;