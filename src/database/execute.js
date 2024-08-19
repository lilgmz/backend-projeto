const UserModel = require('../models/UserModel');

async function execute() {

    let user = await UserModel.create({
        is_active: 0,
        email: "mex@mail.com",
        username: "mex",
        password: 456,
        user_id: user.id,
        firstname: "Mex",
        surname: "Til"
    });
    console.log(user);
}


execute();