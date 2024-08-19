const connection = require('../config/connection');

require('../models/CategoryModel');
require('../models/UserModel');
require('../models/ProductModel');

connection.sync({force: true});